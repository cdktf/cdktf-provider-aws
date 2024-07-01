# `bcmdataexportsExport` Submodule <a name="`bcmdataexportsExport` Submodule" id="@cdktf/provider-aws.bcmdataexportsExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmdataexportsExport <a name="BcmdataexportsExport" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export aws_bcmdataexports_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExport(scope Construct, id *string, config BcmdataexportsExportConfig) BcmdataexportsExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig">BcmdataexportsExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig">BcmdataexportsExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putExport">PutExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetExport">ResetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExport` <a name="PutExport" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putExport"></a>

```go
func PutExport(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putExport.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putTimeouts"></a>

```go
func PutTimeouts(value BcmdataexportsExportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a>

---

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetExport"></a>

```go
func ResetExport()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BcmdataexportsExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.BcmdataexportsExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.BcmdataexportsExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.BcmdataexportsExport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.BcmdataexportsExport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BcmdataexportsExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BcmdataexportsExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BcmdataexportsExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BcmdataexportsExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.export">Export</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList">BcmdataexportsExportExportList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference">BcmdataexportsExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.exportInput">ExportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.export"></a>

```go
func Export() BcmdataexportsExportExportList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList">BcmdataexportsExportExportList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.timeouts"></a>

```go
func Timeouts() BcmdataexportsExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference">BcmdataexportsExportTimeoutsOutputReference</a>

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.exportInput"></a>

```go
func ExportInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmdataexportsExportConfig <a name="BcmdataexportsExportConfig" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Export: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.bcmdataexportsExport.BcmdataexportsExportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.export">Export</a></code> | <code>interface{}</code> | export block. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.export"></a>

```go
Export interface{}
```

- *Type:* interface{}

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportConfig.property.timeouts"></a>

```go
Timeouts BcmdataexportsExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts">BcmdataexportsExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#timeouts BcmdataexportsExport#timeouts}

---

### BcmdataexportsExportExport <a name="BcmdataexportsExportExport" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExport {
	Name: *string,
	DataQuery: interface{},
	Description: *string,
	DestinationConfigurations: interface{},
	RefreshCadence: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.dataQuery">DataQuery</a></code> | <code>interface{}</code> | data_query block. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.destinationConfigurations">DestinationConfigurations</a></code> | <code>interface{}</code> | destination_configurations block. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.refreshCadence">RefreshCadence</a></code> | <code>interface{}</code> | refresh_cadence block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}.

---

##### `DataQuery`<sup>Optional</sup> <a name="DataQuery" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.dataQuery"></a>

```go
DataQuery interface{}
```

- *Type:* interface{}

data_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#data_query BcmdataexportsExport#data_query}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}.

---

##### `DestinationConfigurations`<sup>Optional</sup> <a name="DestinationConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.destinationConfigurations"></a>

```go
DestinationConfigurations interface{}
```

- *Type:* interface{}

destination_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#destination_configurations BcmdataexportsExport#destination_configurations}

---

##### `RefreshCadence`<sup>Optional</sup> <a name="RefreshCadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExport.property.refreshCadence"></a>

```go
RefreshCadence interface{}
```

- *Type:* interface{}

refresh_cadence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#refresh_cadence BcmdataexportsExport#refresh_cadence}

---

### BcmdataexportsExportExportDataQuery <a name="BcmdataexportsExportExportDataQuery" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportDataQuery {
	QueryStatement: *string,
	TableConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.queryStatement">QueryStatement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.tableConfigurations">TableConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}. |

---

##### `QueryStatement`<sup>Required</sup> <a name="QueryStatement" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.queryStatement"></a>

```go
QueryStatement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}.

---

##### `TableConfigurations`<sup>Optional</sup> <a name="TableConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.tableConfigurations"></a>

```go
TableConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}.

---

### BcmdataexportsExportExportDestinationConfigurations <a name="BcmdataexportsExportExportDestinationConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportDestinationConfigurations {
	S3Destination: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.property.s3Destination">S3Destination</a></code> | <code>interface{}</code> | s3_destination block. |

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.property.s3Destination"></a>

```go
S3Destination interface{}
```

- *Type:* interface{}

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#s3_destination BcmdataexportsExport#s3_destination}

---

### BcmdataexportsExportExportDestinationConfigurationsS3Destination <a name="BcmdataexportsExportExportDestinationConfigurationsS3Destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportDestinationConfigurationsS3Destination {
	S3Bucket: *string,
	S3Prefix: *string,
	S3Region: *string,
	S3OutputConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Prefix">S3Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Region">S3Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3OutputConfigurations">S3OutputConfigurations</a></code> | <code>interface{}</code> | s3_output_configurations block. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}.

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Prefix"></a>

```go
S3Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}.

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Region"></a>

```go
S3Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}.

---

##### `S3OutputConfigurations`<sup>Optional</sup> <a name="S3OutputConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3OutputConfigurations"></a>

```go
S3OutputConfigurations interface{}
```

- *Type:* interface{}

s3_output_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#s3_output_configurations BcmdataexportsExport#s3_output_configurations}

---

### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations {
	Compression: *string,
	Format: *string,
	OutputType: *string,
	Overwrite: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.compression">Compression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.outputType">OutputType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.overwrite">Overwrite</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}. |

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}.

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.outputType"></a>

```go
OutputType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}.

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.overwrite"></a>

```go
Overwrite *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}.

---

### BcmdataexportsExportExportRefreshCadence <a name="BcmdataexportsExportExportRefreshCadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportRefreshCadence {
	Frequency: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.property.frequency">Frequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}. |

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}.

---

### BcmdataexportsExportTimeouts <a name="BcmdataexportsExportTimeouts" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#create BcmdataexportsExport#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/bcmdataexports_export#update BcmdataexportsExport#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BcmdataexportsExportExportDataQueryList <a name="BcmdataexportsExportExportDataQueryList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDataQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BcmdataexportsExportExportDataQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.get"></a>

```go
func Get(index *f64) BcmdataexportsExportExportDataQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDataQueryOutputReference <a name="BcmdataexportsExportExportDataQueryOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDataQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BcmdataexportsExportExportDataQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resetTableConfigurations">ResetTableConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTableConfigurations` <a name="ResetTableConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resetTableConfigurations"></a>

```go
func ResetTableConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatementInput">QueryStatementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurationsInput">TableConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatement">QueryStatement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations">TableConfigurations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryStatementInput`<sup>Optional</sup> <a name="QueryStatementInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatementInput"></a>

```go
func QueryStatementInput() *string
```

- *Type:* *string

---

##### `TableConfigurationsInput`<sup>Optional</sup> <a name="TableConfigurationsInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurationsInput"></a>

```go
func TableConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStatement`<sup>Required</sup> <a name="QueryStatement" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatement"></a>

```go
func QueryStatement() *string
```

- *Type:* *string

---

##### `TableConfigurations`<sup>Required</sup> <a name="TableConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations"></a>

```go
func TableConfigurations() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDestinationConfigurationsList <a name="BcmdataexportsExportExportDestinationConfigurationsList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDestinationConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BcmdataexportsExportExportDestinationConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.get"></a>

```go
func Get(index *f64) BcmdataexportsExportExportDestinationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDestinationConfigurationsOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDestinationConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BcmdataexportsExportExportDestinationConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resetS3Destination">ResetS3Destination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination"></a>

```go
func PutS3Destination(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resetS3Destination"></a>

```go
func ResetS3Destination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList">BcmdataexportsExportExportDestinationConfigurationsS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3DestinationInput">S3DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination"></a>

```go
func S3Destination() BcmdataexportsExportExportDestinationConfigurationsS3DestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList">BcmdataexportsExportExportDestinationConfigurationsS3DestinationList</a>

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3DestinationInput"></a>

```go
func S3DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationList <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDestinationConfigurationsS3DestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BcmdataexportsExportExportDestinationConfigurationsS3DestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.get"></a>

```go
func Get(index *f64) BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations">PutS3OutputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resetS3OutputConfigurations">ResetS3OutputConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3OutputConfigurations` <a name="PutS3OutputConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations"></a>

```go
func PutS3OutputConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetS3OutputConfigurations` <a name="ResetS3OutputConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resetS3OutputConfigurations"></a>

```go
func ResetS3OutputConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations">S3OutputConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurationsInput">S3OutputConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3PrefixInput">S3PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3RegionInput">S3RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix">S3Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region">S3Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3OutputConfigurations`<sup>Required</sup> <a name="S3OutputConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations"></a>

```go
func S3OutputConfigurations() BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList</a>

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3OutputConfigurationsInput`<sup>Optional</sup> <a name="S3OutputConfigurationsInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurationsInput"></a>

```go
func S3OutputConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `S3PrefixInput`<sup>Optional</sup> <a name="S3PrefixInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3PrefixInput"></a>

```go
func S3PrefixInput() *string
```

- *Type:* *string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3RegionInput"></a>

```go
func S3RegionInput() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix"></a>

```go
func S3Prefix() *string
```

- *Type:* *string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region"></a>

```go
func S3Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.get"></a>

```go
func Get(index *f64) BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwriteInput">OverwriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType">OutputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite">Overwrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputTypeInput"></a>

```go
func OutputTypeInput() *string
```

- *Type:* *string

---

##### `OverwriteInput`<sup>Optional</sup> <a name="OverwriteInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwriteInput"></a>

```go
func OverwriteInput() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType"></a>

```go
func OutputType() *string
```

- *Type:* *string

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite"></a>

```go
func Overwrite() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportList <a name="BcmdataexportsExportExportList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BcmdataexportsExportExportList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.get"></a>

```go
func Get(index *f64) BcmdataexportsExportExportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportOutputReference <a name="BcmdataexportsExportExportOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BcmdataexportsExportExportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery">PutDataQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations">PutDestinationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence">PutRefreshCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDataQuery">ResetDataQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDestinationConfigurations">ResetDestinationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetRefreshCadence">ResetRefreshCadence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataQuery` <a name="PutDataQuery" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery"></a>

```go
func PutDataQuery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDestinationConfigurations` <a name="PutDestinationConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations"></a>

```go
func PutDestinationConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRefreshCadence` <a name="PutRefreshCadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence"></a>

```go
func PutRefreshCadence(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataQuery` <a name="ResetDataQuery" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDataQuery"></a>

```go
func ResetDataQuery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDestinationConfigurations` <a name="ResetDestinationConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDestinationConfigurations"></a>

```go
func ResetDestinationConfigurations()
```

##### `ResetRefreshCadence` <a name="ResetRefreshCadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetRefreshCadence"></a>

```go
func ResetRefreshCadence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQuery">DataQuery</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList">BcmdataexportsExportExportDataQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurations">DestinationConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList">BcmdataexportsExportExportDestinationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.exportArn">ExportArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadence">RefreshCadence</a></code> | <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList">BcmdataexportsExportExportRefreshCadenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQueryInput">DataQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurationsInput">DestinationConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadenceInput">RefreshCadenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataQuery`<sup>Required</sup> <a name="DataQuery" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQuery"></a>

```go
func DataQuery() BcmdataexportsExportExportDataQueryList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDataQueryList">BcmdataexportsExportExportDataQueryList</a>

---

##### `DestinationConfigurations`<sup>Required</sup> <a name="DestinationConfigurations" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurations"></a>

```go
func DestinationConfigurations() BcmdataexportsExportExportDestinationConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsList">BcmdataexportsExportExportDestinationConfigurationsList</a>

---

##### `ExportArn`<sup>Required</sup> <a name="ExportArn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.exportArn"></a>

```go
func ExportArn() *string
```

- *Type:* *string

---

##### `RefreshCadence`<sup>Required</sup> <a name="RefreshCadence" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadence"></a>

```go
func RefreshCadence() BcmdataexportsExportExportRefreshCadenceList
```

- *Type:* <a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList">BcmdataexportsExportExportRefreshCadenceList</a>

---

##### `DataQueryInput`<sup>Optional</sup> <a name="DataQueryInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQueryInput"></a>

```go
func DataQueryInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationConfigurationsInput`<sup>Optional</sup> <a name="DestinationConfigurationsInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurationsInput"></a>

```go
func DestinationConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RefreshCadenceInput`<sup>Optional</sup> <a name="RefreshCadenceInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadenceInput"></a>

```go
func RefreshCadenceInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportRefreshCadenceList <a name="BcmdataexportsExportExportRefreshCadenceList" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportRefreshCadenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BcmdataexportsExportExportRefreshCadenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.get"></a>

```go
func Get(index *f64) BcmdataexportsExportExportRefreshCadenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportRefreshCadenceOutputReference <a name="BcmdataexportsExportExportRefreshCadenceOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportRefreshCadenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BcmdataexportsExportExportRefreshCadenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportTimeoutsOutputReference <a name="BcmdataexportsExportTimeoutsOutputReference" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmdataexportsExportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bcmdataexportsExport.BcmdataexportsExportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



