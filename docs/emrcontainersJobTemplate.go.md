# `emrcontainersJobTemplate` Submodule <a name="`emrcontainersJobTemplate` Submodule" id="@cdktf/provider-aws.emrcontainersJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrcontainersJobTemplate <a name="EmrcontainersJobTemplate" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template aws_emrcontainers_job_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplate(scope Construct, id *string, config EmrcontainersJobTemplateConfig) EmrcontainersJobTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig">EmrcontainersJobTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig">EmrcontainersJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putJobTemplateData">PutJobTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobTemplateData` <a name="PutJobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putJobTemplateData"></a>

```go
func PutJobTemplateData(value EmrcontainersJobTemplateJobTemplateData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putJobTemplateData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putTimeouts"></a>

```go
func PutTimeouts(value EmrcontainersJobTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmrcontainersJobTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.EmrcontainersJobTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.EmrcontainersJobTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.EmrcontainersJobTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.EmrcontainersJobTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EmrcontainersJobTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmrcontainersJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmrcontainersJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EmrcontainersJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateData">JobTemplateData</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference">EmrcontainersJobTemplateJobTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference">EmrcontainersJobTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateDataInput">JobTemplateDataInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `JobTemplateData`<sup>Required</sup> <a name="JobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateData"></a>

```go
func JobTemplateData() EmrcontainersJobTemplateJobTemplateDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference">EmrcontainersJobTemplateJobTemplateDataOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeouts"></a>

```go
func Timeouts() EmrcontainersJobTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference">EmrcontainersJobTemplateTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobTemplateDataInput`<sup>Optional</sup> <a name="JobTemplateDataInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateDataInput"></a>

```go
func JobTemplateDataInput() EmrcontainersJobTemplateJobTemplateData
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrcontainersJobTemplateConfig <a name="EmrcontainersJobTemplateConfig" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	JobTemplateData: github.com/cdktf/cdktf-provider-aws-go/aws/v19.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData,
	Name: *string,
	Id: *string,
	KmsKeyArn: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.jobTemplateData">JobTemplateData</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | job_template_data block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobTemplateData`<sup>Required</sup> <a name="JobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.jobTemplateData"></a>

```go
JobTemplateData EmrcontainersJobTemplateJobTemplateData
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

job_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#job_template_data EmrcontainersJobTemplate#job_template_data}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.timeouts"></a>

```go
Timeouts EmrcontainersJobTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#timeouts EmrcontainersJobTemplate#timeouts}

---

### EmrcontainersJobTemplateJobTemplateData <a name="EmrcontainersJobTemplateJobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateData {
	ExecutionRoleArn: *string,
	JobDriver: github.com/cdktf/cdktf-provider-aws-go/aws/v19.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver,
	ReleaseLabel: *string,
	ConfigurationOverrides: github.com/cdktf/cdktf-provider-aws-go/aws/v19.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides,
	JobTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#execution_role_arn EmrcontainersJobTemplate#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobDriver">JobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a></code> | job_driver block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.releaseLabel">ReleaseLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#release_label EmrcontainersJobTemplate#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.configurationOverrides">ConfigurationOverrides</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a></code> | configuration_overrides block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobTags">JobTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#job_tags EmrcontainersJobTemplate#job_tags}. |

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#execution_role_arn EmrcontainersJobTemplate#execution_role_arn}.

---

##### `JobDriver`<sup>Required</sup> <a name="JobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobDriver"></a>

```go
JobDriver EmrcontainersJobTemplateJobTemplateDataJobDriver
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

job_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#job_driver EmrcontainersJobTemplate#job_driver}

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.releaseLabel"></a>

```go
ReleaseLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#release_label EmrcontainersJobTemplate#release_label}.

---

##### `ConfigurationOverrides`<sup>Optional</sup> <a name="ConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.configurationOverrides"></a>

```go
ConfigurationOverrides EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

configuration_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#configuration_overrides EmrcontainersJobTemplate#configuration_overrides}

---

##### `JobTags`<sup>Optional</sup> <a name="JobTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobTags"></a>

```go
JobTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#job_tags EmrcontainersJobTemplate#job_tags}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides {
	ApplicationConfiguration: interface{},
	MonitoringConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v19.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.applicationConfiguration">ApplicationConfiguration</a></code> | <code>interface{}</code> | application_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a></code> | monitoring_configuration block. |

---

##### `ApplicationConfiguration`<sup>Optional</sup> <a name="ApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.applicationConfiguration"></a>

```go
ApplicationConfiguration interface{}
```

- *Type:* interface{}

application_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#application_configuration EmrcontainersJobTemplate#application_configuration}

---

##### `MonitoringConfiguration`<sup>Optional</sup> <a name="MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.monitoringConfiguration"></a>

```go
MonitoringConfiguration EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#monitoring_configuration EmrcontainersJobTemplate#monitoring_configuration}

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration {
	Classification: *string,
	Configurations: interface{},
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.classification">Classification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.configurations">Configurations</a></code> | <code>interface{}</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}. |

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.classification"></a>

```go
Classification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}.

---

##### `Configurations`<sup>Optional</sup> <a name="Configurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.configurations"></a>

```go
Configurations interface{}
```

- *Type:* interface{}

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#configurations EmrcontainersJobTemplate#configurations}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations {
	Classification: *string,
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.classification">Classification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.classification"></a>

```go
Classification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration {
	CloudWatchMonitoringConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v19.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration,
	PersistentAppUi: *string,
	S3MonitoringConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v19.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.cloudWatchMonitoringConfiguration">CloudWatchMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a></code> | cloud_watch_monitoring_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.persistentAppUi">PersistentAppUi</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#persistent_app_ui EmrcontainersJobTemplate#persistent_app_ui}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.s3MonitoringConfiguration">S3MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a></code> | s3_monitoring_configuration block. |

---

##### `CloudWatchMonitoringConfiguration`<sup>Optional</sup> <a name="CloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.cloudWatchMonitoringConfiguration"></a>

```go
CloudWatchMonitoringConfiguration EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

cloud_watch_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#cloud_watch_monitoring_configuration EmrcontainersJobTemplate#cloud_watch_monitoring_configuration}

---

##### `PersistentAppUi`<sup>Optional</sup> <a name="PersistentAppUi" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.persistentAppUi"></a>

```go
PersistentAppUi *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#persistent_app_ui EmrcontainersJobTemplate#persistent_app_ui}.

---

##### `S3MonitoringConfiguration`<sup>Optional</sup> <a name="S3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.s3MonitoringConfiguration"></a>

```go
S3MonitoringConfiguration EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

s3_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#s3_monitoring_configuration EmrcontainersJobTemplate#s3_monitoring_configuration}

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {
	LogGroupName: *string,
	LogStreamNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#log_group_name EmrcontainersJobTemplate#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#log_stream_name_prefix EmrcontainersJobTemplate#log_stream_name_prefix}. |

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#log_group_name EmrcontainersJobTemplate#log_group_name}.

---

##### `LogStreamNamePrefix`<sup>Optional</sup> <a name="LogStreamNamePrefix" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logStreamNamePrefix"></a>

```go
LogStreamNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#log_stream_name_prefix EmrcontainersJobTemplate#log_stream_name_prefix}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {
	LogUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.property.logUri">LogUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#log_uri EmrcontainersJobTemplate#log_uri}. |

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.property.logUri"></a>

```go
LogUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#log_uri EmrcontainersJobTemplate#log_uri}.

---

### EmrcontainersJobTemplateJobTemplateDataJobDriver <a name="EmrcontainersJobTemplateJobTemplateDataJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver {
	SparkSqlJobDriver: github.com/cdktf/cdktf-provider-aws-go/aws/v19.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver,
	SparkSubmitJobDriver: github.com/cdktf/cdktf-provider-aws-go/aws/v19.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSqlJobDriver">SparkSqlJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a></code> | spark_sql_job_driver block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSubmitJobDriver">SparkSubmitJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a></code> | spark_submit_job_driver block. |

---

##### `SparkSqlJobDriver`<sup>Optional</sup> <a name="SparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSqlJobDriver"></a>

```go
SparkSqlJobDriver EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

spark_sql_job_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#spark_sql_job_driver EmrcontainersJobTemplate#spark_sql_job_driver}

---

##### `SparkSubmitJobDriver`<sup>Optional</sup> <a name="SparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSubmitJobDriver"></a>

```go
SparkSubmitJobDriver EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

spark_submit_job_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#spark_submit_job_driver EmrcontainersJobTemplate#spark_submit_job_driver}

---

### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver {
	EntryPoint: *string,
	SparkSqlParameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.sparkSqlParameters">SparkSqlParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#spark_sql_parameters EmrcontainersJobTemplate#spark_sql_parameters}. |

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.entryPoint"></a>

```go
EntryPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}.

---

##### `SparkSqlParameters`<sup>Optional</sup> <a name="SparkSqlParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.sparkSqlParameters"></a>

```go
SparkSqlParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#spark_sql_parameters EmrcontainersJobTemplate#spark_sql_parameters}.

---

### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver {
	EntryPoint: *string,
	EntryPointArguments: *[]*string,
	SparkSubmitParameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPointArguments">EntryPointArguments</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#entry_point_arguments EmrcontainersJobTemplate#entry_point_arguments}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.sparkSubmitParameters">SparkSubmitParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#spark_submit_parameters EmrcontainersJobTemplate#spark_submit_parameters}. |

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPoint"></a>

```go
EntryPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}.

---

##### `EntryPointArguments`<sup>Optional</sup> <a name="EntryPointArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPointArguments"></a>

```go
EntryPointArguments *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#entry_point_arguments EmrcontainersJobTemplate#entry_point_arguments}.

---

##### `SparkSubmitParameters`<sup>Optional</sup> <a name="SparkSubmitParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.sparkSubmitParameters"></a>

```go
SparkSubmitParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#spark_submit_parameters EmrcontainersJobTemplate#spark_submit_parameters}.

---

### EmrcontainersJobTemplateTimeouts <a name="EmrcontainersJobTemplateTimeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

&emrcontainersjobtemplate.EmrcontainersJobTemplateTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#delete EmrcontainersJobTemplate#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/emrcontainers_job_template#delete EmrcontainersJobTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.get"></a>

```go
func Get(index *f64) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetClassification"></a>

```go
func ResetClassification()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classification">Classification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classificationInput"></a>

```go
func ClassificationInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classification"></a>

```go
func Classification() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.get"></a>

```go
func Get(index *f64) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetConfigurations">ResetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurations` <a name="PutConfigurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.putConfigurations"></a>

```go
func PutConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.putConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfigurations` <a name="ResetConfigurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetConfigurations"></a>

```go
func ResetConfigurations()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurations">Configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurationsInput">ConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classification">Classification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurations"></a>

```go
func Configurations() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList</a>

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classificationInput"></a>

```go
func ClassificationInput() *string
```

- *Type:* *string

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurationsInput"></a>

```go
func ConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classification"></a>

```go
func Classification() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resetLogStreamNamePrefix">ResetLogStreamNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogStreamNamePrefix` <a name="ResetLogStreamNamePrefix" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```go
func ResetLogStreamNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefixInput">LogStreamNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `LogStreamNamePrefixInput`<sup>Optional</sup> <a name="LogStreamNamePrefixInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```go
func LogStreamNamePrefixInput() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `LogStreamNamePrefix`<sup>Required</sup> <a name="LogStreamNamePrefix" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefix"></a>

```go
func LogStreamNamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putCloudWatchMonitoringConfiguration">PutCloudWatchMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putS3MonitoringConfiguration">PutS3MonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetCloudWatchMonitoringConfiguration">ResetCloudWatchMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetPersistentAppUi">ResetPersistentAppUi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetS3MonitoringConfiguration">ResetS3MonitoringConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudWatchMonitoringConfiguration` <a name="PutCloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putCloudWatchMonitoringConfiguration"></a>

```go
func PutCloudWatchMonitoringConfiguration(value EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putCloudWatchMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

---

##### `PutS3MonitoringConfiguration` <a name="PutS3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putS3MonitoringConfiguration"></a>

```go
func PutS3MonitoringConfiguration(value EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putS3MonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

---

##### `ResetCloudWatchMonitoringConfiguration` <a name="ResetCloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetCloudWatchMonitoringConfiguration"></a>

```go
func ResetCloudWatchMonitoringConfiguration()
```

##### `ResetPersistentAppUi` <a name="ResetPersistentAppUi" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetPersistentAppUi"></a>

```go
func ResetPersistentAppUi()
```

##### `ResetS3MonitoringConfiguration` <a name="ResetS3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetS3MonitoringConfiguration"></a>

```go
func ResetS3MonitoringConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfiguration">CloudWatchMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfiguration">S3MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfigurationInput">CloudWatchMonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUiInput">PersistentAppUiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfigurationInput">S3MonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUi">PersistentAppUi</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatchMonitoringConfiguration`<sup>Required</sup> <a name="CloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfiguration"></a>

```go
func CloudWatchMonitoringConfiguration() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference</a>

---

##### `S3MonitoringConfiguration`<sup>Required</sup> <a name="S3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfiguration"></a>

```go
func S3MonitoringConfiguration() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference</a>

---

##### `CloudWatchMonitoringConfigurationInput`<sup>Optional</sup> <a name="CloudWatchMonitoringConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfigurationInput"></a>

```go
func CloudWatchMonitoringConfigurationInput() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

---

##### `PersistentAppUiInput`<sup>Optional</sup> <a name="PersistentAppUiInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUiInput"></a>

```go
func PersistentAppUiInput() *string
```

- *Type:* *string

---

##### `S3MonitoringConfigurationInput`<sup>Optional</sup> <a name="S3MonitoringConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfigurationInput"></a>

```go
func S3MonitoringConfigurationInput() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

---

##### `PersistentAppUi`<sup>Required</sup> <a name="PersistentAppUi" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUi"></a>

```go
func PersistentAppUi() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUriInput">LogUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUri">LogUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogUriInput`<sup>Optional</sup> <a name="LogUriInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUriInput"></a>

```go
func LogUriInput() *string
```

- *Type:* *string

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUri"></a>

```go
func LogUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putApplicationConfiguration">PutApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putMonitoringConfiguration">PutMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetApplicationConfiguration">ResetApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetMonitoringConfiguration">ResetMonitoringConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationConfiguration` <a name="PutApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putApplicationConfiguration"></a>

```go
func PutApplicationConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putApplicationConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMonitoringConfiguration` <a name="PutMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putMonitoringConfiguration"></a>

```go
func PutMonitoringConfiguration(value EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

---

##### `ResetApplicationConfiguration` <a name="ResetApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetApplicationConfiguration"></a>

```go
func ResetApplicationConfiguration()
```

##### `ResetMonitoringConfiguration` <a name="ResetMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetMonitoringConfiguration"></a>

```go
func ResetMonitoringConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfiguration">ApplicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfigurationInput">ApplicationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfigurationInput">MonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationConfiguration`<sup>Required</sup> <a name="ApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfiguration"></a>

```go
func ApplicationConfiguration() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfiguration"></a>

```go
func MonitoringConfiguration() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference</a>

---

##### `ApplicationConfigurationInput`<sup>Optional</sup> <a name="ApplicationConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfigurationInput"></a>

```go
func ApplicationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringConfigurationInput`<sup>Optional</sup> <a name="MonitoringConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfigurationInput"></a>

```go
func MonitoringConfigurationInput() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

---


### EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSqlJobDriver">PutSparkSqlJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSubmitJobDriver">PutSparkSubmitJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSqlJobDriver">ResetSparkSqlJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSubmitJobDriver">ResetSparkSubmitJobDriver</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSparkSqlJobDriver` <a name="PutSparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSqlJobDriver"></a>

```go
func PutSparkSqlJobDriver(value EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSqlJobDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

---

##### `PutSparkSubmitJobDriver` <a name="PutSparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSubmitJobDriver"></a>

```go
func PutSparkSubmitJobDriver(value EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSubmitJobDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

---

##### `ResetSparkSqlJobDriver` <a name="ResetSparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSqlJobDriver"></a>

```go
func ResetSparkSqlJobDriver()
```

##### `ResetSparkSubmitJobDriver` <a name="ResetSparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSubmitJobDriver"></a>

```go
func ResetSparkSubmitJobDriver()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriver">SparkSqlJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriver">SparkSubmitJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriverInput">SparkSqlJobDriverInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriverInput">SparkSubmitJobDriverInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SparkSqlJobDriver`<sup>Required</sup> <a name="SparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriver"></a>

```go
func SparkSqlJobDriver() EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference</a>

---

##### `SparkSubmitJobDriver`<sup>Required</sup> <a name="SparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriver"></a>

```go
func SparkSubmitJobDriver() EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference</a>

---

##### `SparkSqlJobDriverInput`<sup>Optional</sup> <a name="SparkSqlJobDriverInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriverInput"></a>

```go
func SparkSqlJobDriverInput() EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

---

##### `SparkSubmitJobDriverInput`<sup>Optional</sup> <a name="SparkSubmitJobDriverInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriverInput"></a>

```go
func SparkSubmitJobDriverInput() EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersJobTemplateJobTemplateDataJobDriver
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

---


### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetSparkSqlParameters">ResetSparkSqlParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetEntryPoint"></a>

```go
func ResetEntryPoint()
```

##### `ResetSparkSqlParameters` <a name="ResetSparkSqlParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetSparkSqlParameters"></a>

```go
func ResetSparkSqlParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParametersInput">SparkSqlParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParameters">SparkSqlParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPointInput"></a>

```go
func EntryPointInput() *string
```

- *Type:* *string

---

##### `SparkSqlParametersInput`<sup>Optional</sup> <a name="SparkSqlParametersInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParametersInput"></a>

```go
func SparkSqlParametersInput() *string
```

- *Type:* *string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPoint"></a>

```go
func EntryPoint() *string
```

- *Type:* *string

---

##### `SparkSqlParameters`<sup>Required</sup> <a name="SparkSqlParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParameters"></a>

```go
func SparkSqlParameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

---


### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetEntryPointArguments">ResetEntryPointArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetSparkSubmitParameters">ResetSparkSubmitParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntryPointArguments` <a name="ResetEntryPointArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetEntryPointArguments"></a>

```go
func ResetEntryPointArguments()
```

##### `ResetSparkSubmitParameters` <a name="ResetSparkSubmitParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetSparkSubmitParameters"></a>

```go
func ResetSparkSubmitParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArgumentsInput">EntryPointArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParametersInput">SparkSubmitParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArguments">EntryPointArguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParameters">SparkSubmitParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntryPointArgumentsInput`<sup>Optional</sup> <a name="EntryPointArgumentsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArgumentsInput"></a>

```go
func EntryPointArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointInput"></a>

```go
func EntryPointInput() *string
```

- *Type:* *string

---

##### `SparkSubmitParametersInput`<sup>Optional</sup> <a name="SparkSubmitParametersInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParametersInput"></a>

```go
func SparkSubmitParametersInput() *string
```

- *Type:* *string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPoint"></a>

```go
func EntryPoint() *string
```

- *Type:* *string

---

##### `EntryPointArguments`<sup>Required</sup> <a name="EntryPointArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArguments"></a>

```go
func EntryPointArguments() *[]*string
```

- *Type:* *[]*string

---

##### `SparkSubmitParameters`<sup>Required</sup> <a name="SparkSubmitParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParameters"></a>

```go
func SparkSubmitParameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

---


### EmrcontainersJobTemplateJobTemplateDataOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateJobTemplateDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersJobTemplateJobTemplateDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putConfigurationOverrides">PutConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putJobDriver">PutJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetConfigurationOverrides">ResetConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetJobTags">ResetJobTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurationOverrides` <a name="PutConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putConfigurationOverrides"></a>

```go
func PutConfigurationOverrides(value EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putConfigurationOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

---

##### `PutJobDriver` <a name="PutJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putJobDriver"></a>

```go
func PutJobDriver(value EmrcontainersJobTemplateJobTemplateDataJobDriver)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putJobDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

---

##### `ResetConfigurationOverrides` <a name="ResetConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetConfigurationOverrides"></a>

```go
func ResetConfigurationOverrides()
```

##### `ResetJobTags` <a name="ResetJobTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetJobTags"></a>

```go
func ResetJobTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverrides">ConfigurationOverrides</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriver">JobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverridesInput">ConfigurationOverridesInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriverInput">JobDriverInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTagsInput">JobTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabelInput">ReleaseLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTags">JobTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabel">ReleaseLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationOverrides`<sup>Required</sup> <a name="ConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverrides"></a>

```go
func ConfigurationOverrides() EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference</a>

---

##### `JobDriver`<sup>Required</sup> <a name="JobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriver"></a>

```go
func JobDriver() EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference</a>

---

##### `ConfigurationOverridesInput`<sup>Optional</sup> <a name="ConfigurationOverridesInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverridesInput"></a>

```go
func ConfigurationOverridesInput() EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `JobDriverInput`<sup>Optional</sup> <a name="JobDriverInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriverInput"></a>

```go
func JobDriverInput() EmrcontainersJobTemplateJobTemplateDataJobDriver
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

---

##### `JobTagsInput`<sup>Optional</sup> <a name="JobTagsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTagsInput"></a>

```go
func JobTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ReleaseLabelInput`<sup>Optional</sup> <a name="ReleaseLabelInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabelInput"></a>

```go
func ReleaseLabelInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `JobTags`<sup>Required</sup> <a name="JobTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTags"></a>

```go
func JobTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabel"></a>

```go
func ReleaseLabel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.internalValue"></a>

```go
func InternalValue() EmrcontainersJobTemplateJobTemplateData
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

---


### EmrcontainersJobTemplateTimeoutsOutputReference <a name="EmrcontainersJobTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/emrcontainersjobtemplate"

emrcontainersjobtemplate.NewEmrcontainersJobTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EmrcontainersJobTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



