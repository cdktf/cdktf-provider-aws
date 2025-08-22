# `dataexchangeRevisionAssets` Submodule <a name="`dataexchangeRevisionAssets` Submodule" id="@cdktf/provider-aws.dataexchangeRevisionAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataexchangeRevisionAssets <a name="DataexchangeRevisionAssets" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets aws_dataexchange_revision_assets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssets(scope Construct, id *string, config DataexchangeRevisionAssetsConfig) DataexchangeRevisionAssets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig">DataexchangeRevisionAssetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig">DataexchangeRevisionAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putAsset">PutAsset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetAsset">ResetAsset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetFinalized">ResetFinalized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAsset` <a name="PutAsset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putAsset"></a>

```go
func PutAsset(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putAsset.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putTimeouts"></a>

```go
func PutTimeouts(value DataexchangeRevisionAssetsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a>

---

##### `ResetAsset` <a name="ResetAsset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetAsset"></a>

```go
func ResetAsset()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetComment"></a>

```go
func ResetComment()
```

##### `ResetFinalized` <a name="ResetFinalized" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetFinalized"></a>

```go
func ResetFinalized()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataexchangeRevisionAssets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.DataexchangeRevisionAssets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.DataexchangeRevisionAssets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.DataexchangeRevisionAssets_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.DataexchangeRevisionAssets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataexchangeRevisionAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataexchangeRevisionAssets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataexchangeRevisionAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataexchangeRevisionAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.asset">Asset</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList">DataexchangeRevisionAssetsAssetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference">DataexchangeRevisionAssetsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.assetInput">AssetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dataSetIdInput">DataSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.finalizedInput">FinalizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dataSetId">DataSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.finalized">Finalized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Asset`<sup>Required</sup> <a name="Asset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.asset"></a>

```go
func Asset() DataexchangeRevisionAssetsAssetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList">DataexchangeRevisionAssetsAssetList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.timeouts"></a>

```go
func Timeouts() DataexchangeRevisionAssetsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference">DataexchangeRevisionAssetsTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AssetInput`<sup>Optional</sup> <a name="AssetInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.assetInput"></a>

```go
func AssetInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DataSetIdInput`<sup>Optional</sup> <a name="DataSetIdInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dataSetIdInput"></a>

```go
func DataSetIdInput() *string
```

- *Type:* *string

---

##### `FinalizedInput`<sup>Optional</sup> <a name="FinalizedInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.finalizedInput"></a>

```go
func FinalizedInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dataSetId"></a>

```go
func DataSetId() *string
```

- *Type:* *string

---

##### `Finalized`<sup>Required</sup> <a name="Finalized" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.finalized"></a>

```go
func Finalized() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataexchangeRevisionAssetsAsset <a name="DataexchangeRevisionAssetsAsset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

&dataexchangerevisionassets.DataexchangeRevisionAssetsAsset {
	CreateS3DataAccessFromS3Bucket: interface{},
	ImportAssetsFromS3: interface{},
	ImportAssetsFromSignedUrl: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.createS3DataAccessFromS3Bucket">CreateS3DataAccessFromS3Bucket</a></code> | <code>interface{}</code> | create_s3_data_access_from_s3_bucket block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.importAssetsFromS3">ImportAssetsFromS3</a></code> | <code>interface{}</code> | import_assets_from_s3 block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.importAssetsFromSignedUrl">ImportAssetsFromSignedUrl</a></code> | <code>interface{}</code> | import_assets_from_signed_url block. |

---

##### `CreateS3DataAccessFromS3Bucket`<sup>Optional</sup> <a name="CreateS3DataAccessFromS3Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.createS3DataAccessFromS3Bucket"></a>

```go
CreateS3DataAccessFromS3Bucket interface{}
```

- *Type:* interface{}

create_s3_data_access_from_s3_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#create_s3_data_access_from_s3_bucket DataexchangeRevisionAssets#create_s3_data_access_from_s3_bucket}

---

##### `ImportAssetsFromS3`<sup>Optional</sup> <a name="ImportAssetsFromS3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.importAssetsFromS3"></a>

```go
ImportAssetsFromS3 interface{}
```

- *Type:* interface{}

import_assets_from_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#import_assets_from_s3 DataexchangeRevisionAssets#import_assets_from_s3}

---

##### `ImportAssetsFromSignedUrl`<sup>Optional</sup> <a name="ImportAssetsFromSignedUrl" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.importAssetsFromSignedUrl"></a>

```go
ImportAssetsFromSignedUrl interface{}
```

- *Type:* interface{}

import_assets_from_signed_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#import_assets_from_signed_url DataexchangeRevisionAssets#import_assets_from_signed_url}

---

### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

&dataexchangerevisionassets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket {
	AssetSource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket.property.assetSource">AssetSource</a></code> | <code>interface{}</code> | asset_source block. |

---

##### `AssetSource`<sup>Optional</sup> <a name="AssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket.property.assetSource"></a>

```go
AssetSource interface{}
```

- *Type:* interface{}

asset_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#asset_source DataexchangeRevisionAssets#asset_source}

---

### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

&dataexchangerevisionassets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource {
	Bucket: *string,
	KeyPrefixes: *[]*string,
	Keys: *[]*string,
	KmsKeysToGrant: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.keyPrefixes">KeyPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#key_prefixes DataexchangeRevisionAssets#key_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.keys">Keys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#keys DataexchangeRevisionAssets#keys}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.kmsKeysToGrant">KmsKeysToGrant</a></code> | <code>interface{}</code> | kms_keys_to_grant block. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}.

---

##### `KeyPrefixes`<sup>Optional</sup> <a name="KeyPrefixes" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.keyPrefixes"></a>

```go
KeyPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#key_prefixes DataexchangeRevisionAssets#key_prefixes}.

---

##### `Keys`<sup>Optional</sup> <a name="Keys" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.keys"></a>

```go
Keys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#keys DataexchangeRevisionAssets#keys}.

---

##### `KmsKeysToGrant`<sup>Optional</sup> <a name="KmsKeysToGrant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.kmsKeysToGrant"></a>

```go
KmsKeysToGrant interface{}
```

- *Type:* interface{}

kms_keys_to_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#kms_keys_to_grant DataexchangeRevisionAssets#kms_keys_to_grant}

---

### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

&dataexchangerevisionassets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant {
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#kms_key_arn DataexchangeRevisionAssets#kms_key_arn}. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#kms_key_arn DataexchangeRevisionAssets#kms_key_arn}.

---

### DataexchangeRevisionAssetsAssetImportAssetsFromS3 <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

&dataexchangerevisionassets.DataexchangeRevisionAssetsAssetImportAssetsFromS3 {
	AssetSource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3.property.assetSource">AssetSource</a></code> | <code>interface{}</code> | asset_source block. |

---

##### `AssetSource`<sup>Optional</sup> <a name="AssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3.property.assetSource"></a>

```go
AssetSource interface{}
```

- *Type:* interface{}

asset_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#asset_source DataexchangeRevisionAssets#asset_source}

---

### DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

&dataexchangerevisionassets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource {
	Bucket: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#key DataexchangeRevisionAssets#key}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#key DataexchangeRevisionAssets#key}.

---

### DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl <a name="DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

&dataexchangerevisionassets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl {
	Filename: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl.property.filename">Filename</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#filename DataexchangeRevisionAssets#filename}. |

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#filename DataexchangeRevisionAssets#filename}.

---

### DataexchangeRevisionAssetsConfig <a name="DataexchangeRevisionAssetsConfig" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

&dataexchangerevisionassets.DataexchangeRevisionAssetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSetId: *string,
	Asset: interface{},
	Comment: *string,
	Finalized: interface{},
	ForceDestroy: interface{},
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.dataSetId">DataSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#data_set_id DataexchangeRevisionAssets#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.asset">Asset</a></code> | <code>interface{}</code> | asset block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#comment DataexchangeRevisionAssets#comment}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.finalized">Finalized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#finalized DataexchangeRevisionAssets#finalized}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#force_destroy DataexchangeRevisionAssets#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#tags DataexchangeRevisionAssets#tags}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.dataSetId"></a>

```go
DataSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#data_set_id DataexchangeRevisionAssets#data_set_id}.

---

##### `Asset`<sup>Optional</sup> <a name="Asset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.asset"></a>

```go
Asset interface{}
```

- *Type:* interface{}

asset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#asset DataexchangeRevisionAssets#asset}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#comment DataexchangeRevisionAssets#comment}.

---

##### `Finalized`<sup>Optional</sup> <a name="Finalized" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.finalized"></a>

```go
Finalized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#finalized DataexchangeRevisionAssets#finalized}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#force_destroy DataexchangeRevisionAssets#force_destroy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#region DataexchangeRevisionAssets#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#tags DataexchangeRevisionAssets#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.timeouts"></a>

```go
Timeouts DataexchangeRevisionAssetsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#timeouts DataexchangeRevisionAssets#timeouts}

---

### DataexchangeRevisionAssetsTimeouts <a name="DataexchangeRevisionAssetsTimeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

&dataexchangerevisionassets.DataexchangeRevisionAssetsTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dataexchange_revision_assets#create DataexchangeRevisionAssets#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.get"></a>

```go
func Get(index *f64) DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.get"></a>

```go
func Get(index *f64) DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.putKmsKeysToGrant">PutKmsKeysToGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKeyPrefixes">ResetKeyPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKeys">ResetKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKmsKeysToGrant">ResetKmsKeysToGrant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKmsKeysToGrant` <a name="PutKmsKeysToGrant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.putKmsKeysToGrant"></a>

```go
func PutKmsKeysToGrant(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.putKmsKeysToGrant.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKeyPrefixes` <a name="ResetKeyPrefixes" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKeyPrefixes"></a>

```go
func ResetKeyPrefixes()
```

##### `ResetKeys` <a name="ResetKeys" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKeys"></a>

```go
func ResetKeys()
```

##### `ResetKmsKeysToGrant` <a name="ResetKmsKeysToGrant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKmsKeysToGrant"></a>

```go
func ResetKmsKeysToGrant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.kmsKeysToGrant">KmsKeysToGrant</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keyPrefixesInput">KeyPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keysInput">KeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.kmsKeysToGrantInput">KmsKeysToGrantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keyPrefixes">KeyPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keys">Keys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeysToGrant`<sup>Required</sup> <a name="KmsKeysToGrant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.kmsKeysToGrant"></a>

```go
func KmsKeysToGrant() DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyPrefixesInput`<sup>Optional</sup> <a name="KeyPrefixesInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keyPrefixesInput"></a>

```go
func KeyPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keysInput"></a>

```go
func KeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeysToGrantInput`<sup>Optional</sup> <a name="KmsKeysToGrantInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.kmsKeysToGrantInput"></a>

```go
func KmsKeysToGrantInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `KeyPrefixes`<sup>Required</sup> <a name="KeyPrefixes" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keyPrefixes"></a>

```go
func KeyPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keys"></a>

```go
func Keys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.get"></a>

```go
func Get(index *f64) DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.putAssetSource">PutAssetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resetAssetSource">ResetAssetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssetSource` <a name="PutAssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.putAssetSource"></a>

```go
func PutAssetSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.putAssetSource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssetSource` <a name="ResetAssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resetAssetSource"></a>

```go
func ResetAssetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.accessPointAlias">AccessPointAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.accessPointArn">AccessPointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.assetSource">AssetSource</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.assetSourceInput">AssetSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessPointAlias`<sup>Required</sup> <a name="AccessPointAlias" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.accessPointAlias"></a>

```go
func AccessPointAlias() *string
```

- *Type:* *string

---

##### `AccessPointArn`<sup>Required</sup> <a name="AccessPointArn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.accessPointArn"></a>

```go
func AccessPointArn() *string
```

- *Type:* *string

---

##### `AssetSource`<sup>Required</sup> <a name="AssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.assetSource"></a>

```go
func AssetSource() DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList</a>

---

##### `AssetSourceInput`<sup>Optional</sup> <a name="AssetSourceInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.assetSourceInput"></a>

```go
func AssetSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.get"></a>

```go
func Get(index *f64) DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetImportAssetsFromS3List <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3List" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetImportAssetsFromS3List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataexchangeRevisionAssetsAssetImportAssetsFromS3List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.get"></a>

```go
func Get(index *f64) DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.putAssetSource">PutAssetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resetAssetSource">ResetAssetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssetSource` <a name="PutAssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.putAssetSource"></a>

```go
func PutAssetSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.putAssetSource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssetSource` <a name="ResetAssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resetAssetSource"></a>

```go
func ResetAssetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.assetSource">AssetSource</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.assetSourceInput">AssetSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssetSource`<sup>Required</sup> <a name="AssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.assetSource"></a>

```go
func AssetSource() DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList</a>

---

##### `AssetSourceInput`<sup>Optional</sup> <a name="AssetSourceInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.assetSourceInput"></a>

```go
func AssetSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList <a name="DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.get"></a>

```go
func Get(index *f64) DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference <a name="DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetList <a name="DataexchangeRevisionAssetsAssetList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataexchangeRevisionAssetsAssetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.get"></a>

```go
func Get(index *f64) DataexchangeRevisionAssetsAssetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsAssetOutputReference <a name="DataexchangeRevisionAssetsAssetOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsAssetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataexchangeRevisionAssetsAssetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putCreateS3DataAccessFromS3Bucket">PutCreateS3DataAccessFromS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromS3">PutImportAssetsFromS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromSignedUrl">PutImportAssetsFromSignedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetCreateS3DataAccessFromS3Bucket">ResetCreateS3DataAccessFromS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetImportAssetsFromS3">ResetImportAssetsFromS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetImportAssetsFromSignedUrl">ResetImportAssetsFromSignedUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCreateS3DataAccessFromS3Bucket` <a name="PutCreateS3DataAccessFromS3Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putCreateS3DataAccessFromS3Bucket"></a>

```go
func PutCreateS3DataAccessFromS3Bucket(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putCreateS3DataAccessFromS3Bucket.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImportAssetsFromS3` <a name="PutImportAssetsFromS3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromS3"></a>

```go
func PutImportAssetsFromS3(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromS3.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImportAssetsFromSignedUrl` <a name="PutImportAssetsFromSignedUrl" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromSignedUrl"></a>

```go
func PutImportAssetsFromSignedUrl(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromSignedUrl.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreateS3DataAccessFromS3Bucket` <a name="ResetCreateS3DataAccessFromS3Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetCreateS3DataAccessFromS3Bucket"></a>

```go
func ResetCreateS3DataAccessFromS3Bucket()
```

##### `ResetImportAssetsFromS3` <a name="ResetImportAssetsFromS3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetImportAssetsFromS3"></a>

```go
func ResetImportAssetsFromS3()
```

##### `ResetImportAssetsFromSignedUrl` <a name="ResetImportAssetsFromSignedUrl" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetImportAssetsFromSignedUrl"></a>

```go
func ResetImportAssetsFromSignedUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createS3DataAccessFromS3Bucket">CreateS3DataAccessFromS3Bucket</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromS3">ImportAssetsFromS3</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List">DataexchangeRevisionAssetsAssetImportAssetsFromS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromSignedUrl">ImportAssetsFromSignedUrl</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createS3DataAccessFromS3BucketInput">CreateS3DataAccessFromS3BucketInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromS3Input">ImportAssetsFromS3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromSignedUrlInput">ImportAssetsFromSignedUrlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreateS3DataAccessFromS3Bucket`<sup>Required</sup> <a name="CreateS3DataAccessFromS3Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createS3DataAccessFromS3Bucket"></a>

```go
func CreateS3DataAccessFromS3Bucket() DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportAssetsFromS3`<sup>Required</sup> <a name="ImportAssetsFromS3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromS3"></a>

```go
func ImportAssetsFromS3() DataexchangeRevisionAssetsAssetImportAssetsFromS3List
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List">DataexchangeRevisionAssetsAssetImportAssetsFromS3List</a>

---

##### `ImportAssetsFromSignedUrl`<sup>Required</sup> <a name="ImportAssetsFromSignedUrl" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromSignedUrl"></a>

```go
func ImportAssetsFromSignedUrl() DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `CreateS3DataAccessFromS3BucketInput`<sup>Optional</sup> <a name="CreateS3DataAccessFromS3BucketInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createS3DataAccessFromS3BucketInput"></a>

```go
func CreateS3DataAccessFromS3BucketInput() interface{}
```

- *Type:* interface{}

---

##### `ImportAssetsFromS3Input`<sup>Optional</sup> <a name="ImportAssetsFromS3Input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromS3Input"></a>

```go
func ImportAssetsFromS3Input() interface{}
```

- *Type:* interface{}

---

##### `ImportAssetsFromSignedUrlInput`<sup>Optional</sup> <a name="ImportAssetsFromSignedUrlInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromSignedUrlInput"></a>

```go
func ImportAssetsFromSignedUrlInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeRevisionAssetsTimeoutsOutputReference <a name="DataexchangeRevisionAssetsTimeoutsOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataexchangerevisionassets"

dataexchangerevisionassets.NewDataexchangeRevisionAssetsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataexchangeRevisionAssetsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



