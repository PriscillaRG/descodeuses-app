import { FormControl } from '@angular/forms';
export interface Todo {
    // | en typescript c'est possibilite d'avoir
    // plusieurs types

    // | null cad champ optionel

    //identifiant
    id: FormControl<number | null>;
    title: FormControl<string | null>;
    completed: FormControl<boolean | null>;
    priority: FormControl<string | null>;
    dueDate: FormControl<Date| null>;

}