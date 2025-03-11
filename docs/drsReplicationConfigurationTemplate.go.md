# `drsReplicationConfigurationTemplate` Submodule <a name="`drsReplicationConfigurationTemplate` Submodule" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsReplicationConfigurationTemplate <a name="DrsReplicationConfigurationTemplate" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template aws_drs_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

drsreplicationconfigurationtemplate.NewDrsReplicationConfigurationTemplate(scope Construct, id *string, config DrsReplicationConfigurationTemplateConfig) DrsReplicationConfigurationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig">DrsReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig">DrsReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy">PutPitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks">ResetAutoReplicateNewDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn">ResetEbsEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetPitPolicy">ResetPitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPitPolicy` <a name="PutPitPolicy" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy"></a>

```go
func PutPitPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTimeouts"></a>

```go
func PutTimeouts(value DrsReplicationConfigurationTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts">DrsReplicationConfigurationTemplateTimeouts</a>

---

##### `ResetAutoReplicateNewDisks` <a name="ResetAutoReplicateNewDisks" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks"></a>

```go
func ResetAutoReplicateNewDisks()
```

##### `ResetEbsEncryptionKeyArn` <a name="ResetEbsEncryptionKeyArn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn"></a>

```go
func ResetEbsEncryptionKeyArn()
```

##### `ResetPitPolicy` <a name="ResetPitPolicy" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetPitPolicy"></a>

```go
func ResetPitPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

drsreplicationconfigurationtemplate.DrsReplicationConfigurationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

drsreplicationconfigurationtemplate.DrsReplicationConfigurationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

drsreplicationconfigurationtemplate.DrsReplicationConfigurationTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

drsreplicationconfigurationtemplate.DrsReplicationConfigurationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DrsReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DrsReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DrsReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy">PitPolicy</a></code> | <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference">DrsReplicationConfigurationTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput">AssociateDefaultSecurityGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput">AutoReplicateNewDisksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput">BandwidthThrottlingInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput">CreatePublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput">DataPlaneRoutingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput">DefaultLargeStagingDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput">EbsEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput">EbsEncryptionKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput">PitPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput">ReplicationServerInstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIdsInput">ReplicationServersSecurityGroupsIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput">StagingAreaSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput">StagingAreaTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput">UseDedicatedReplicationServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks">AutoReplicateNewDisks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp">CreatePublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption">EbsEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIds">ReplicationServersSecurityGroupsIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags">StagingAreaTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PitPolicy`<sup>Required</sup> <a name="PitPolicy" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy"></a>

```go
func PitPolicy() DrsReplicationConfigurationTemplatePitPolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.timeouts"></a>

```go
func Timeouts() DrsReplicationConfigurationTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference">DrsReplicationConfigurationTemplateTimeoutsOutputReference</a>

---

##### `AssociateDefaultSecurityGroupInput`<sup>Optional</sup> <a name="AssociateDefaultSecurityGroupInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput"></a>

```go
func AssociateDefaultSecurityGroupInput() interface{}
```

- *Type:* interface{}

---

##### `AutoReplicateNewDisksInput`<sup>Optional</sup> <a name="AutoReplicateNewDisksInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput"></a>

```go
func AutoReplicateNewDisksInput() interface{}
```

- *Type:* interface{}

---

##### `BandwidthThrottlingInput`<sup>Optional</sup> <a name="BandwidthThrottlingInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput"></a>

```go
func BandwidthThrottlingInput() *f64
```

- *Type:* *f64

---

##### `CreatePublicIpInput`<sup>Optional</sup> <a name="CreatePublicIpInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput"></a>

```go
func CreatePublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `DataPlaneRoutingInput`<sup>Optional</sup> <a name="DataPlaneRoutingInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput"></a>

```go
func DataPlaneRoutingInput() *string
```

- *Type:* *string

---

##### `DefaultLargeStagingDiskTypeInput`<sup>Optional</sup> <a name="DefaultLargeStagingDiskTypeInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput"></a>

```go
func DefaultLargeStagingDiskTypeInput() *string
```

- *Type:* *string

---

##### `EbsEncryptionInput`<sup>Optional</sup> <a name="EbsEncryptionInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput"></a>

```go
func EbsEncryptionInput() *string
```

- *Type:* *string

---

##### `EbsEncryptionKeyArnInput`<sup>Optional</sup> <a name="EbsEncryptionKeyArnInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput"></a>

```go
func EbsEncryptionKeyArnInput() *string
```

- *Type:* *string

---

##### `PitPolicyInput`<sup>Optional</sup> <a name="PitPolicyInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput"></a>

```go
func PitPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationServerInstanceTypeInput`<sup>Optional</sup> <a name="ReplicationServerInstanceTypeInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput"></a>

```go
func ReplicationServerInstanceTypeInput() *string
```

- *Type:* *string

---

##### `ReplicationServersSecurityGroupsIdsInput`<sup>Optional</sup> <a name="ReplicationServersSecurityGroupsIdsInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIdsInput"></a>

```go
func ReplicationServersSecurityGroupsIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StagingAreaSubnetIdInput`<sup>Optional</sup> <a name="StagingAreaSubnetIdInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput"></a>

```go
func StagingAreaSubnetIdInput() *string
```

- *Type:* *string

---

##### `StagingAreaTagsInput`<sup>Optional</sup> <a name="StagingAreaTagsInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput"></a>

```go
func StagingAreaTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseDedicatedReplicationServerInput`<sup>Optional</sup> <a name="UseDedicatedReplicationServerInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput"></a>

```go
func UseDedicatedReplicationServerInput() interface{}
```

- *Type:* interface{}

---

##### `AssociateDefaultSecurityGroup`<sup>Required</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```go
func AssociateDefaultSecurityGroup() interface{}
```

- *Type:* interface{}

---

##### `AutoReplicateNewDisks`<sup>Required</sup> <a name="AutoReplicateNewDisks" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks"></a>

```go
func AutoReplicateNewDisks() interface{}
```

- *Type:* interface{}

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```go
func BandwidthThrottling() *f64
```

- *Type:* *f64

---

##### `CreatePublicIp`<sup>Required</sup> <a name="CreatePublicIp" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp"></a>

```go
func CreatePublicIp() interface{}
```

- *Type:* interface{}

---

##### `DataPlaneRouting`<sup>Required</sup> <a name="DataPlaneRouting" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```go
func DataPlaneRouting() *string
```

- *Type:* *string

---

##### `DefaultLargeStagingDiskType`<sup>Required</sup> <a name="DefaultLargeStagingDiskType" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```go
func DefaultLargeStagingDiskType() *string
```

- *Type:* *string

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption"></a>

```go
func EbsEncryption() *string
```

- *Type:* *string

---

##### `EbsEncryptionKeyArn`<sup>Required</sup> <a name="EbsEncryptionKeyArn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```go
func EbsEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `ReplicationServerInstanceType`<sup>Required</sup> <a name="ReplicationServerInstanceType" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```go
func ReplicationServerInstanceType() *string
```

- *Type:* *string

---

##### `ReplicationServersSecurityGroupsIds`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIds" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIds"></a>

```go
func ReplicationServersSecurityGroupsIds() *[]*string
```

- *Type:* *[]*string

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```go
func StagingAreaSubnetId() *string
```

- *Type:* *string

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```go
func StagingAreaTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseDedicatedReplicationServer`<sup>Required</sup> <a name="UseDedicatedReplicationServer" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```go
func UseDedicatedReplicationServer() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DrsReplicationConfigurationTemplateConfig <a name="DrsReplicationConfigurationTemplateConfig" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

&drsreplicationconfigurationtemplate.DrsReplicationConfigurationTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssociateDefaultSecurityGroup: interface{},
	BandwidthThrottling: *f64,
	CreatePublicIp: interface{},
	DataPlaneRouting: *string,
	DefaultLargeStagingDiskType: *string,
	EbsEncryption: *string,
	ReplicationServerInstanceType: *string,
	ReplicationServersSecurityGroupsIds: *[]*string,
	StagingAreaSubnetId: *string,
	StagingAreaTags: *map[string]*string,
	UseDedicatedReplicationServer: interface{},
	AutoReplicateNewDisks: interface{},
	EbsEncryptionKeyArn: *string,
	PitPolicy: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp">CreatePublicIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption">EbsEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIds">ReplicationServersSecurityGroupsIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_ids DrsReplicationConfigurationTemplate#replication_servers_security_groups_ids}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags">StagingAreaTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks">AutoReplicateNewDisks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy">PitPolicy</a></code> | <code>interface{}</code> | pit_policy block. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts">DrsReplicationConfigurationTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociateDefaultSecurityGroup`<sup>Required</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup"></a>

```go
AssociateDefaultSecurityGroup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}.

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling"></a>

```go
BandwidthThrottling *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}.

---

##### `CreatePublicIp`<sup>Required</sup> <a name="CreatePublicIp" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp"></a>

```go
CreatePublicIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}.

---

##### `DataPlaneRouting`<sup>Required</sup> <a name="DataPlaneRouting" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting"></a>

```go
DataPlaneRouting *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}.

---

##### `DefaultLargeStagingDiskType`<sup>Required</sup> <a name="DefaultLargeStagingDiskType" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType"></a>

```go
DefaultLargeStagingDiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}.

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption"></a>

```go
EbsEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}.

---

##### `ReplicationServerInstanceType`<sup>Required</sup> <a name="ReplicationServerInstanceType" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType"></a>

```go
ReplicationServerInstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}.

---

##### `ReplicationServersSecurityGroupsIds`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIds" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIds"></a>

```go
ReplicationServersSecurityGroupsIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_ids DrsReplicationConfigurationTemplate#replication_servers_security_groups_ids}.

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId"></a>

```go
StagingAreaSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}.

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags"></a>

```go
StagingAreaTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}.

---

##### `UseDedicatedReplicationServer`<sup>Required</sup> <a name="UseDedicatedReplicationServer" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer"></a>

```go
UseDedicatedReplicationServer interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}.

---

##### `AutoReplicateNewDisks`<sup>Optional</sup> <a name="AutoReplicateNewDisks" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks"></a>

```go
AutoReplicateNewDisks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}.

---

##### `EbsEncryptionKeyArn`<sup>Optional</sup> <a name="EbsEncryptionKeyArn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn"></a>

```go
EbsEncryptionKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}.

---

##### `PitPolicy`<sup>Optional</sup> <a name="PitPolicy" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy"></a>

```go
PitPolicy interface{}
```

- *Type:* interface{}

pit_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#pit_policy DrsReplicationConfigurationTemplate#pit_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.timeouts"></a>

```go
Timeouts DrsReplicationConfigurationTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts">DrsReplicationConfigurationTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#timeouts DrsReplicationConfigurationTemplate#timeouts}

---

### DrsReplicationConfigurationTemplatePitPolicy <a name="DrsReplicationConfigurationTemplatePitPolicy" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

&drsreplicationconfigurationtemplate.DrsReplicationConfigurationTemplatePitPolicy {
	Interval: *f64,
	RetentionDuration: *f64,
	Units: *string,
	Enabled: interface{},
	RuleId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval">Interval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#interval DrsReplicationConfigurationTemplate#interval}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration">RetentionDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#retention_duration DrsReplicationConfigurationTemplate#retention_duration}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#units DrsReplicationConfigurationTemplate#units}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#enabled DrsReplicationConfigurationTemplate#enabled}. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId">RuleId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#rule_id DrsReplicationConfigurationTemplate#rule_id}. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#interval DrsReplicationConfigurationTemplate#interval}.

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration"></a>

```go
RetentionDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#retention_duration DrsReplicationConfigurationTemplate#retention_duration}.

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#units DrsReplicationConfigurationTemplate#units}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#enabled DrsReplicationConfigurationTemplate#enabled}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId"></a>

```go
RuleId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#rule_id DrsReplicationConfigurationTemplate#rule_id}.

---

### DrsReplicationConfigurationTemplateTimeouts <a name="DrsReplicationConfigurationTemplateTimeouts" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

&drsreplicationconfigurationtemplate.DrsReplicationConfigurationTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#create DrsReplicationConfigurationTemplate#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#delete DrsReplicationConfigurationTemplate#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/drs_replication_configuration_template#update DrsReplicationConfigurationTemplate#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsReplicationConfigurationTemplatePitPolicyList <a name="DrsReplicationConfigurationTemplatePitPolicyList" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

drsreplicationconfigurationtemplate.NewDrsReplicationConfigurationTemplatePitPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DrsReplicationConfigurationTemplatePitPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get"></a>

```go
func Get(index *f64) DrsReplicationConfigurationTemplatePitPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DrsReplicationConfigurationTemplatePitPolicyOutputReference <a name="DrsReplicationConfigurationTemplatePitPolicyOutputReference" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

drsreplicationconfigurationtemplate.NewDrsReplicationConfigurationTemplatePitPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DrsReplicationConfigurationTemplatePitPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId">ResetRuleId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId"></a>

```go
func ResetRuleId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput">RetentionDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration">RetentionDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId">RuleId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `RetentionDurationInput`<sup>Optional</sup> <a name="RetentionDurationInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput"></a>

```go
func RetentionDurationInput() *f64
```

- *Type:* *f64

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput"></a>

```go
func RuleIdInput() *f64
```

- *Type:* *f64

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration"></a>

```go
func RetentionDuration() *f64
```

- *Type:* *f64

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId"></a>

```go
func RuleId() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DrsReplicationConfigurationTemplateTimeoutsOutputReference <a name="DrsReplicationConfigurationTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/drsreplicationconfigurationtemplate"

drsreplicationconfigurationtemplate.NewDrsReplicationConfigurationTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DrsReplicationConfigurationTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



