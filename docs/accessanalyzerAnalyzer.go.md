# `accessanalyzerAnalyzer` Submodule <a name="`accessanalyzerAnalyzer` Submodule" id="@cdktf/provider-aws.accessanalyzerAnalyzer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessanalyzerAnalyzer <a name="AccessanalyzerAnalyzer" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer aws_accessanalyzer_analyzer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzer(scope Construct, id *string, config AccessanalyzerAnalyzerConfig) AccessanalyzerAnalyzer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig">AccessanalyzerAnalyzerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig">AccessanalyzerAnalyzerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putConfiguration"></a>

```go
func PutConfiguration(value AccessanalyzerAnalyzerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerConfiguration</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessanalyzerAnalyzer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

accessanalyzeranalyzer.AccessanalyzerAnalyzer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

accessanalyzeranalyzer.AccessanalyzerAnalyzer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

accessanalyzeranalyzer.AccessanalyzerAnalyzer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

accessanalyzeranalyzer.AccessanalyzerAnalyzer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AccessanalyzerAnalyzer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccessanalyzerAnalyzer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccessanalyzerAnalyzer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AccessanalyzerAnalyzer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference">AccessanalyzerAnalyzerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerNameInput">AnalyzerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerName">AnalyzerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.configuration"></a>

```go
func Configuration() AccessanalyzerAnalyzerConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference">AccessanalyzerAnalyzerConfigurationOutputReference</a>

---

##### `AnalyzerNameInput`<sup>Optional</sup> <a name="AnalyzerNameInput" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerNameInput"></a>

```go
func AnalyzerNameInput() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.configurationInput"></a>

```go
func ConfigurationInput() AccessanalyzerAnalyzerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AnalyzerName`<sup>Required</sup> <a name="AnalyzerName" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerName"></a>

```go
func AnalyzerName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessanalyzerAnalyzerConfig <a name="AccessanalyzerAnalyzerConfig" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AnalyzerName: *string,
	Configuration: github.com/cdktf/cdktf-provider-aws-go/aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerName">AnalyzerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#analyzer_name AccessanalyzerAnalyzer#analyzer_name}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#id AccessanalyzerAnalyzer#id}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#tags AccessanalyzerAnalyzer#tags}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#tags_all AccessanalyzerAnalyzer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#type AccessanalyzerAnalyzer#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalyzerName`<sup>Required</sup> <a name="AnalyzerName" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerName"></a>

```go
AnalyzerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#analyzer_name AccessanalyzerAnalyzer#analyzer_name}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.configuration"></a>

```go
Configuration AccessanalyzerAnalyzerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#configuration AccessanalyzerAnalyzer#configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#id AccessanalyzerAnalyzer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#tags AccessanalyzerAnalyzer#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#tags_all AccessanalyzerAnalyzer#tags_all}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#type AccessanalyzerAnalyzer#type}.

---

### AccessanalyzerAnalyzerConfiguration <a name="AccessanalyzerAnalyzerConfiguration" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerConfiguration {
	UnusedAccess: github.com/cdktf/cdktf-provider-aws-go/aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration.property.unusedAccess">UnusedAccess</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess">AccessanalyzerAnalyzerConfigurationUnusedAccess</a></code> | unused_access block. |

---

##### `UnusedAccess`<sup>Optional</sup> <a name="UnusedAccess" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration.property.unusedAccess"></a>

```go
UnusedAccess AccessanalyzerAnalyzerConfigurationUnusedAccess
```

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess">AccessanalyzerAnalyzerConfigurationUnusedAccess</a>

unused_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#unused_access AccessanalyzerAnalyzer#unused_access}

---

### AccessanalyzerAnalyzerConfigurationUnusedAccess <a name="AccessanalyzerAnalyzerConfigurationUnusedAccess" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess {
	UnusedAccessAge: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess.property.unusedAccessAge">UnusedAccessAge</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#unused_access_age AccessanalyzerAnalyzer#unused_access_age}. |

---

##### `UnusedAccessAge`<sup>Optional</sup> <a name="UnusedAccessAge" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess.property.unusedAccessAge"></a>

```go
UnusedAccessAge *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/accessanalyzer_analyzer#unused_access_age AccessanalyzerAnalyzer#unused_access_age}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessanalyzerAnalyzerConfigurationOutputReference <a name="AccessanalyzerAnalyzerConfigurationOutputReference" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessanalyzerAnalyzerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.putUnusedAccess">PutUnusedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.resetUnusedAccess">ResetUnusedAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUnusedAccess` <a name="PutUnusedAccess" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.putUnusedAccess"></a>

```go
func PutUnusedAccess(value AccessanalyzerAnalyzerConfigurationUnusedAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.putUnusedAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess">AccessanalyzerAnalyzerConfigurationUnusedAccess</a>

---

##### `ResetUnusedAccess` <a name="ResetUnusedAccess" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.resetUnusedAccess"></a>

```go
func ResetUnusedAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.unusedAccess">UnusedAccess</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference">AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.unusedAccessInput">UnusedAccessInput</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess">AccessanalyzerAnalyzerConfigurationUnusedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnusedAccess`<sup>Required</sup> <a name="UnusedAccess" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.unusedAccess"></a>

```go
func UnusedAccess() AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference">AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference</a>

---

##### `UnusedAccessInput`<sup>Optional</sup> <a name="UnusedAccessInput" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.unusedAccessInput"></a>

```go
func UnusedAccessInput() AccessanalyzerAnalyzerConfigurationUnusedAccess
```

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess">AccessanalyzerAnalyzerConfigurationUnusedAccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessanalyzerAnalyzerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerConfiguration</a>

---


### AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference <a name="AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.resetUnusedAccessAge">ResetUnusedAccessAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnusedAccessAge` <a name="ResetUnusedAccessAge" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.resetUnusedAccessAge"></a>

```go
func ResetUnusedAccessAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.unusedAccessAgeInput">UnusedAccessAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.unusedAccessAge">UnusedAccessAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess">AccessanalyzerAnalyzerConfigurationUnusedAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnusedAccessAgeInput`<sup>Optional</sup> <a name="UnusedAccessAgeInput" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.unusedAccessAgeInput"></a>

```go
func UnusedAccessAgeInput() *f64
```

- *Type:* *f64

---

##### `UnusedAccessAge`<sup>Required</sup> <a name="UnusedAccessAge" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.unusedAccessAge"></a>

```go
func UnusedAccessAge() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessanalyzerAnalyzerConfigurationUnusedAccess
```

- *Type:* <a href="#@cdktf/provider-aws.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfigurationUnusedAccess">AccessanalyzerAnalyzerConfigurationUnusedAccess</a>

---



