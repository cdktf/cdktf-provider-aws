// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Image Builder
*/
export interface DataAwsImagebuilderImageRecipesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html#owner DataAwsImagebuilderImageRecipes#owner}
  */
  readonly owner?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html#filter DataAwsImagebuilderImageRecipes#filter}
  */
  readonly filter?: DataAwsImagebuilderImageRecipesFilter[];
}
export interface DataAwsImagebuilderImageRecipesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html#name DataAwsImagebuilderImageRecipes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html#values DataAwsImagebuilderImageRecipes#values}
  */
  readonly values: string[];
}

export function dataAwsImagebuilderImageRecipesFilterToTerraform(struct?: DataAwsImagebuilderImageRecipesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html aws_imagebuilder_image_recipes}
*/
export class DataAwsImagebuilderImageRecipes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_imagebuilder_image_recipes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html aws_imagebuilder_image_recipes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsImagebuilderImageRecipesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsImagebuilderImageRecipesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_image_recipes',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._owner = config.owner;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return this.getListAttribute('arns');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsImagebuilderImageRecipesFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsImagebuilderImageRecipesFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      owner: cdktf.stringToTerraform(this._owner),
      filter: cdktf.listMapper(dataAwsImagebuilderImageRecipesFilterToTerraform)(this._filter),
    };
  }
}
