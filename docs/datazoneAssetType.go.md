# `datazoneAssetType` Submodule <a name="`datazoneAssetType` Submodule" id="@cdktf/provider-aws.datazoneAssetType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneAssetType <a name="DatazoneAssetType" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type aws_datazone_asset_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

datazoneassettype.NewDatazoneAssetType(scope Construct, id *string, config DatazoneAssetTypeConfig) DatazoneAssetType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig">DatazoneAssetTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig">DatazoneAssetTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putFormsInput">PutFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetFormsInput">ResetFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFormsInput` <a name="PutFormsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putFormsInput"></a>

```go
func PutFormsInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putFormsInput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putTimeouts"></a>

```go
func PutTimeouts(value DatazoneAssetTypeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFormsInput` <a name="ResetFormsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetFormsInput"></a>

```go
func ResetFormsInput()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneAssetType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

datazoneassettype.DatazoneAssetType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

datazoneassettype.DatazoneAssetType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

datazoneassettype.DatazoneAssetType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

datazoneassettype.DatazoneAssetType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatazoneAssetType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazoneAssetType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazoneAssetType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneAssetType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInput">FormsInput</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList">DatazoneAssetTypeFormsInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference">DatazoneAssetTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInputInput">FormsInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifierInput">OwningProjectIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifier">OwningProjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `FormsInput`<sup>Required</sup> <a name="FormsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInput"></a>

```go
func FormsInput() DatazoneAssetTypeFormsInputList
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList">DatazoneAssetTypeFormsInputList</a>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeouts"></a>

```go
func Timeouts() DatazoneAssetTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference">DatazoneAssetTypeTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifierInput"></a>

```go
func DomainIdentifierInput() *string
```

- *Type:* *string

---

##### `FormsInputInput`<sup>Optional</sup> <a name="FormsInputInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInputInput"></a>

```go
func FormsInputInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwningProjectIdentifierInput`<sup>Optional</sup> <a name="OwningProjectIdentifierInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifierInput"></a>

```go
func OwningProjectIdentifierInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwningProjectIdentifier`<sup>Required</sup> <a name="OwningProjectIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifier"></a>

```go
func OwningProjectIdentifier() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneAssetTypeConfig <a name="DatazoneAssetTypeConfig" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

&datazoneassettype.DatazoneAssetTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainIdentifier: *string,
	Name: *string,
	OwningProjectIdentifier: *string,
	Description: *string,
	FormsInput: interface{},
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.datazoneAssetType.DatazoneAssetTypeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.owningProjectIdentifier">OwningProjectIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.formsInput">FormsInput</a></code> | <code>interface{}</code> | forms_input block. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.domainIdentifier"></a>

```go
DomainIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}.

---

##### `OwningProjectIdentifier`<sup>Required</sup> <a name="OwningProjectIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.owningProjectIdentifier"></a>

```go
OwningProjectIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}.

---

##### `FormsInput`<sup>Optional</sup> <a name="FormsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.formsInput"></a>

```go
FormsInput interface{}
```

- *Type:* interface{}

forms_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#forms_input DatazoneAssetType#forms_input}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#region DatazoneAssetType#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.timeouts"></a>

```go
Timeouts DatazoneAssetTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#timeouts DatazoneAssetType#timeouts}

---

### DatazoneAssetTypeFormsInput <a name="DatazoneAssetTypeFormsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

&datazoneassettype.DatazoneAssetTypeFormsInput {
	MapBlockKey: *string,
	TypeIdentifier: *string,
	TypeRevision: *string,
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.mapBlockKey">MapBlockKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#map_block_key DatazoneAssetType#map_block_key}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeIdentifier">TypeIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#type_identifier DatazoneAssetType#type_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeRevision">TypeRevision</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#type_revision DatazoneAssetType#type_revision}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#required DatazoneAssetType#required}. |

---

##### `MapBlockKey`<sup>Required</sup> <a name="MapBlockKey" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.mapBlockKey"></a>

```go
MapBlockKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#map_block_key DatazoneAssetType#map_block_key}.

---

##### `TypeIdentifier`<sup>Required</sup> <a name="TypeIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeIdentifier"></a>

```go
TypeIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#type_identifier DatazoneAssetType#type_identifier}.

---

##### `TypeRevision`<sup>Required</sup> <a name="TypeRevision" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeRevision"></a>

```go
TypeRevision *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#type_revision DatazoneAssetType#type_revision}.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#required DatazoneAssetType#required}.

---

### DatazoneAssetTypeTimeouts <a name="DatazoneAssetTypeTimeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

&datazoneassettype.DatazoneAssetTypeTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/datazone_asset_type#create DatazoneAssetType#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneAssetTypeFormsInputList <a name="DatazoneAssetTypeFormsInputList" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

datazoneassettype.NewDatazoneAssetTypeFormsInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneAssetTypeFormsInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.get"></a>

```go
func Get(index *f64) DatazoneAssetTypeFormsInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneAssetTypeFormsInputOutputReference <a name="DatazoneAssetTypeFormsInputOutputReference" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

datazoneassettype.NewDatazoneAssetTypeFormsInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneAssetTypeFormsInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKeyInput">MapBlockKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifierInput">TypeIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevisionInput">TypeRevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKey">MapBlockKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifier">TypeIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevision">TypeRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MapBlockKeyInput`<sup>Optional</sup> <a name="MapBlockKeyInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKeyInput"></a>

```go
func MapBlockKeyInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TypeIdentifierInput`<sup>Optional</sup> <a name="TypeIdentifierInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifierInput"></a>

```go
func TypeIdentifierInput() *string
```

- *Type:* *string

---

##### `TypeRevisionInput`<sup>Optional</sup> <a name="TypeRevisionInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevisionInput"></a>

```go
func TypeRevisionInput() *string
```

- *Type:* *string

---

##### `MapBlockKey`<sup>Required</sup> <a name="MapBlockKey" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKey"></a>

```go
func MapBlockKey() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `TypeIdentifier`<sup>Required</sup> <a name="TypeIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifier"></a>

```go
func TypeIdentifier() *string
```

- *Type:* *string

---

##### `TypeRevision`<sup>Required</sup> <a name="TypeRevision" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevision"></a>

```go
func TypeRevision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneAssetTypeTimeoutsOutputReference <a name="DatazoneAssetTypeTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneassettype"

datazoneassettype.NewDatazoneAssetTypeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneAssetTypeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



