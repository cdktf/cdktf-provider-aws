# `sagemakerImageVersion` Submodule <a name="`sagemakerImageVersion` Submodule" id="@cdktf/provider-aws.sagemakerImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerImageVersion <a name="SagemakerImageVersion" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version aws_sagemaker_image_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sagemakerimageversion"

sagemakerimageversion.NewSagemakerImageVersion(scope Construct, id *string, config SagemakerImageVersionConfig) SagemakerImageVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig">SagemakerImageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig">SagemakerImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetHorovod">ResetHorovod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetJobType">ResetJobType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework">ResetMlFramework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProcessor">ResetProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang">ResetProgrammingLang</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes">ResetReleaseNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance">ResetVendorGuidance</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetAliases"></a>

```go
func ResetAliases()
```

##### `ResetHorovod` <a name="ResetHorovod" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetHorovod"></a>

```go
func ResetHorovod()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetJobType` <a name="ResetJobType" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetJobType"></a>

```go
func ResetJobType()
```

##### `ResetMlFramework` <a name="ResetMlFramework" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework"></a>

```go
func ResetMlFramework()
```

##### `ResetProcessor` <a name="ResetProcessor" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProcessor"></a>

```go
func ResetProcessor()
```

##### `ResetProgrammingLang` <a name="ResetProgrammingLang" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang"></a>

```go
func ResetProgrammingLang()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReleaseNotes` <a name="ResetReleaseNotes" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes"></a>

```go
func ResetReleaseNotes()
```

##### `ResetVendorGuidance` <a name="ResetVendorGuidance" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance"></a>

```go
func ResetVendorGuidance()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerImageVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sagemakerimageversion"

sagemakerimageversion.SagemakerImageVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sagemakerimageversion"

sagemakerimageversion.SagemakerImageVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sagemakerimageversion"

sagemakerimageversion.SagemakerImageVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sagemakerimageversion"

sagemakerimageversion.SagemakerImageVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SagemakerImageVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.containerImage">ContainerImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageArn">ImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput">AliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput">BaseImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput">HorovodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput">JobTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput">MlFrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processorInput">ProcessorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput">ProgrammingLangInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput">ReleaseNotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput">VendorGuidanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliases">Aliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImage">BaseImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovod">Horovod</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobType">JobType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework">MlFramework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processor">Processor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang">ProgrammingLang</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes">ReleaseNotes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance">VendorGuidance</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.containerImage"></a>

```go
func ContainerImage() *string
```

- *Type:* *string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageArn"></a>

```go
func ImageArn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput"></a>

```go
func AliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BaseImageInput`<sup>Optional</sup> <a name="BaseImageInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput"></a>

```go
func BaseImageInput() *string
```

- *Type:* *string

---

##### `HorovodInput`<sup>Optional</sup> <a name="HorovodInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput"></a>

```go
func HorovodInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `JobTypeInput`<sup>Optional</sup> <a name="JobTypeInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput"></a>

```go
func JobTypeInput() *string
```

- *Type:* *string

---

##### `MlFrameworkInput`<sup>Optional</sup> <a name="MlFrameworkInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput"></a>

```go
func MlFrameworkInput() *string
```

- *Type:* *string

---

##### `ProcessorInput`<sup>Optional</sup> <a name="ProcessorInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processorInput"></a>

```go
func ProcessorInput() *string
```

- *Type:* *string

---

##### `ProgrammingLangInput`<sup>Optional</sup> <a name="ProgrammingLangInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput"></a>

```go
func ProgrammingLangInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReleaseNotesInput`<sup>Optional</sup> <a name="ReleaseNotesInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput"></a>

```go
func ReleaseNotesInput() *string
```

- *Type:* *string

---

##### `VendorGuidanceInput`<sup>Optional</sup> <a name="VendorGuidanceInput" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput"></a>

```go
func VendorGuidanceInput() *string
```

- *Type:* *string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.aliases"></a>

```go
func Aliases() *[]*string
```

- *Type:* *[]*string

---

##### `BaseImage`<sup>Required</sup> <a name="BaseImage" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.baseImage"></a>

```go
func BaseImage() *string
```

- *Type:* *string

---

##### `Horovod`<sup>Required</sup> <a name="Horovod" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.horovod"></a>

```go
func Horovod() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.jobType"></a>

```go
func JobType() *string
```

- *Type:* *string

---

##### `MlFramework`<sup>Required</sup> <a name="MlFramework" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework"></a>

```go
func MlFramework() *string
```

- *Type:* *string

---

##### `Processor`<sup>Required</sup> <a name="Processor" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.processor"></a>

```go
func Processor() *string
```

- *Type:* *string

---

##### `ProgrammingLang`<sup>Required</sup> <a name="ProgrammingLang" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang"></a>

```go
func ProgrammingLang() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReleaseNotes`<sup>Required</sup> <a name="ReleaseNotes" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes"></a>

```go
func ReleaseNotes() *string
```

- *Type:* *string

---

##### `VendorGuidance`<sup>Required</sup> <a name="VendorGuidance" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance"></a>

```go
func VendorGuidance() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerImageVersionConfig <a name="SagemakerImageVersionConfig" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sagemakerimageversion"

&sagemakerimageversion.SagemakerImageVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaseImage: *string,
	ImageName: *string,
	Aliases: *[]*string,
	Horovod: interface{},
	Id: *string,
	JobType: *string,
	MlFramework: *string,
	Processor: *string,
	ProgrammingLang: *string,
	Region: *string,
	ReleaseNotes: *string,
	VendorGuidance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage">BaseImage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases">Aliases</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod">Horovod</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType">JobType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework">MlFramework</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor">Processor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang">ProgrammingLang</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes">ReleaseNotes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}. |
| <code><a href="#@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance">VendorGuidance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseImage`<sup>Required</sup> <a name="BaseImage" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage"></a>

```go
BaseImage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}.

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases"></a>

```go
Aliases *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}.

---

##### `Horovod`<sup>Optional</sup> <a name="Horovod" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod"></a>

```go
Horovod interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobType`<sup>Optional</sup> <a name="JobType" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType"></a>

```go
JobType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}.

---

##### `MlFramework`<sup>Optional</sup> <a name="MlFramework" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework"></a>

```go
MlFramework *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}.

---

##### `Processor`<sup>Optional</sup> <a name="Processor" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor"></a>

```go
Processor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}.

---

##### `ProgrammingLang`<sup>Optional</sup> <a name="ProgrammingLang" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang"></a>

```go
ProgrammingLang *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#region SagemakerImageVersion#region}

---

##### `ReleaseNotes`<sup>Optional</sup> <a name="ReleaseNotes" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes"></a>

```go
ReleaseNotes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}.

---

##### `VendorGuidance`<sup>Optional</sup> <a name="VendorGuidance" id="@cdktf/provider-aws.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance"></a>

```go
VendorGuidance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}.

---



