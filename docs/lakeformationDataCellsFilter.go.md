# `lakeformationDataCellsFilter` Submodule <a name="`lakeformationDataCellsFilter` Submodule" id="@cdktf/provider-aws.lakeformationDataCellsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataCellsFilter <a name="LakeformationDataCellsFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter aws_lakeformation_data_cells_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilter(scope Construct, id *string, config LakeformationDataCellsFilterConfig) LakeformationDataCellsFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData">PutTableData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTableData">ResetTableData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTableData` <a name="PutTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData"></a>

```go
func PutTableData(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTableData.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts"></a>

```go
func PutTimeouts(value LakeformationDataCellsFilterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

---

##### `ResetTableData` <a name="ResetTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTableData"></a>

```go
func ResetTableData()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.LakeformationDataCellsFilter_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.LakeformationDataCellsFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.LakeformationDataCellsFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.LakeformationDataCellsFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LakeformationDataCellsFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LakeformationDataCellsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationDataCellsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableData">TableData</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList">LakeformationDataCellsFilterTableDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference">LakeformationDataCellsFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableDataInput">TableDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TableData`<sup>Required</sup> <a name="TableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableData"></a>

```go
func TableData() LakeformationDataCellsFilterTableDataList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList">LakeformationDataCellsFilterTableDataList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeouts"></a>

```go
func Timeouts() LakeformationDataCellsFilterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference">LakeformationDataCellsFilterTimeoutsOutputReference</a>

---

##### `TableDataInput`<sup>Optional</sup> <a name="TableDataInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableDataInput"></a>

```go
func TableDataInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataCellsFilterConfig <a name="LakeformationDataCellsFilterConfig" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

&lakeformationdatacellsfilter.LakeformationDataCellsFilterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TableData: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableData">TableData</a></code> | <code>interface{}</code> | table_data block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TableData`<sup>Optional</sup> <a name="TableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableData"></a>

```go
TableData interface{}
```

- *Type:* interface{}

table_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#table_data LakeformationDataCellsFilter#table_data}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.timeouts"></a>

```go
Timeouts LakeformationDataCellsFilterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts">LakeformationDataCellsFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#timeouts LakeformationDataCellsFilter#timeouts}

---

### LakeformationDataCellsFilterTableData <a name="LakeformationDataCellsFilterTableData" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

&lakeformationdatacellsfilter.LakeformationDataCellsFilterTableData {
	DatabaseName: *string,
	Name: *string,
	TableCatalogId: *string,
	TableName: *string,
	ColumnNames: *[]*string,
	ColumnWildcard: interface{},
	RowFilter: interface{},
	VersionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableCatalogId">TableCatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnWildcard">ColumnWildcard</a></code> | <code>interface{}</code> | column_wildcard block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.rowFilter">RowFilter</a></code> | <code>interface{}</code> | row_filter block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.versionId">VersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}.

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableCatalogId"></a>

```go
TableCatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}.

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}.

---

##### `ColumnWildcard`<sup>Optional</sup> <a name="ColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.columnWildcard"></a>

```go
ColumnWildcard interface{}
```

- *Type:* interface{}

column_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.rowFilter"></a>

```go
RowFilter interface{}
```

- *Type:* interface{}

row_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableData.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}.

---

### LakeformationDataCellsFilterTableDataColumnWildcard <a name="LakeformationDataCellsFilterTableDataColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

&lakeformationdatacellsfilter.LakeformationDataCellsFilterTableDataColumnWildcard {
	ExcludedColumnNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}. |

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcard.property.excludedColumnNames"></a>

```go
ExcludedColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}.

---

### LakeformationDataCellsFilterTableDataRowFilter <a name="LakeformationDataCellsFilterTableDataRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

&lakeformationdatacellsfilter.LakeformationDataCellsFilterTableDataRowFilter {
	AllRowsWildcard: interface{},
	FilterExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.allRowsWildcard">AllRowsWildcard</a></code> | <code>interface{}</code> | all_rows_wildcard block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.filterExpression">FilterExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}. |

---

##### `AllRowsWildcard`<sup>Optional</sup> <a name="AllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.allRowsWildcard"></a>

```go
AllRowsWildcard interface{}
```

- *Type:* interface{}

all_rows_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

##### `FilterExpression`<sup>Optional</sup> <a name="FilterExpression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilter.property.filterExpression"></a>

```go
FilterExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}.

---

### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

&lakeformationdatacellsfilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard {

}
```


### LakeformationDataCellsFilterTimeouts <a name="LakeformationDataCellsFilterTimeouts" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

&lakeformationdatacellsfilter.LakeformationDataCellsFilterTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lakeformation_data_cells_filter#create LakeformationDataCellsFilter#create}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataCellsFilterTableDataColumnWildcardList <a name="LakeformationDataCellsFilterTableDataColumnWildcardList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterTableDataColumnWildcardList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakeformationDataCellsFilterTableDataColumnWildcardList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get"></a>

```go
func Get(index *f64) LakeformationDataCellsFilterTableDataColumnWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataCellsFilterTableDataColumnWildcardOutputReference <a name="LakeformationDataCellsFilterTableDataColumnWildcardOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterTableDataColumnWildcardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakeformationDataCellsFilterTableDataColumnWildcardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```go
func ResetExcludedColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```go
func ExcludedColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.excludedColumnNames"></a>

```go
func ExcludedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataCellsFilterTableDataList <a name="LakeformationDataCellsFilterTableDataList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterTableDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakeformationDataCellsFilterTableDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get"></a>

```go
func Get(index *f64) LakeformationDataCellsFilterTableDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataCellsFilterTableDataOutputReference <a name="LakeformationDataCellsFilterTableDataOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterTableDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakeformationDataCellsFilterTableDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard">PutColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter">PutRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnWildcard">ResetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnWildcard` <a name="PutColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard"></a>

```go
func PutColumnWildcard(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRowFilter` <a name="PutRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter"></a>

```go
func PutRowFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.putRowFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnNames"></a>

```go
func ResetColumnNames()
```

##### `ResetColumnWildcard` <a name="ResetColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetColumnWildcard"></a>

```go
func ResetColumnWildcard()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetRowFilter"></a>

```go
func ResetRowFilter()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.resetVersionId"></a>

```go
func ResetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList">LakeformationDataCellsFilterTableDataColumnWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList">LakeformationDataCellsFilterTableDataRowFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcardInput">ColumnWildcardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilterInput">RowFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogIdInput">TableCatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogId">TableCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnWildcard`<sup>Required</sup> <a name="ColumnWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcard"></a>

```go
func ColumnWildcard() LakeformationDataCellsFilterTableDataColumnWildcardList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataColumnWildcardList">LakeformationDataCellsFilterTableDataColumnWildcardList</a>

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilter"></a>

```go
func RowFilter() LakeformationDataCellsFilterTableDataRowFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList">LakeformationDataCellsFilterTableDataRowFilterList</a>

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnWildcardInput`<sup>Optional</sup> <a name="ColumnWildcardInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnWildcardInput"></a>

```go
func ColumnWildcardInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.rowFilterInput"></a>

```go
func RowFilterInput() interface{}
```

- *Type:* interface{}

---

##### `TableCatalogIdInput`<sup>Optional</sup> <a name="TableCatalogIdInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogIdInput"></a>

```go
func TableCatalogIdInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableCatalogId"></a>

```go
func TableCatalogId() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get"></a>

```go
func Get(index *f64) LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference <a name="LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataCellsFilterTableDataRowFilterList <a name="LakeformationDataCellsFilterTableDataRowFilterList" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterTableDataRowFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakeformationDataCellsFilterTableDataRowFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get"></a>

```go
func Get(index *f64) LakeformationDataCellsFilterTableDataRowFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataCellsFilterTableDataRowFilterOutputReference <a name="LakeformationDataCellsFilterTableDataRowFilterOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterTableDataRowFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakeformationDataCellsFilterTableDataRowFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard">PutAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetAllRowsWildcard">ResetAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetFilterExpression">ResetFilterExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllRowsWildcard` <a name="PutAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard"></a>

```go
func PutAllRowsWildcard(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.putAllRowsWildcard.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllRowsWildcard` <a name="ResetAllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetAllRowsWildcard"></a>

```go
func ResetAllRowsWildcard()
```

##### `ResetFilterExpression` <a name="ResetFilterExpression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.resetFilterExpression"></a>

```go
func ResetFilterExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcard">AllRowsWildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcardInput">AllRowsWildcardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpressionInput">FilterExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpression">FilterExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllRowsWildcard`<sup>Required</sup> <a name="AllRowsWildcard" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcard"></a>

```go
func AllRowsWildcard() LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList">LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList</a>

---

##### `AllRowsWildcardInput`<sup>Optional</sup> <a name="AllRowsWildcardInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.allRowsWildcardInput"></a>

```go
func AllRowsWildcardInput() interface{}
```

- *Type:* interface{}

---

##### `FilterExpressionInput`<sup>Optional</sup> <a name="FilterExpressionInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpressionInput"></a>

```go
func FilterExpressionInput() *string
```

- *Type:* *string

---

##### `FilterExpression`<sup>Required</sup> <a name="FilterExpression" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.filterExpression"></a>

```go
func FilterExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTableDataRowFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataCellsFilterTimeoutsOutputReference <a name="LakeformationDataCellsFilterTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationDataCellsFilterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationDataCellsFilter.LakeformationDataCellsFilterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



