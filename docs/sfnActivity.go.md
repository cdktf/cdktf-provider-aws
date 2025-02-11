# `sfnActivity` Submodule <a name="`sfnActivity` Submodule" id="@cdktf/provider-aws.sfnActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SfnActivity <a name="SfnActivity" id="@cdktf/provider-aws.sfnActivity.SfnActivity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity aws_sfn_activity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnActivity.SfnActivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnactivity"

sfnactivity.NewSfnActivity(scope Construct, id *string, config SfnActivityConfig) SfnActivity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig">SfnActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sfnActivity.SfnActivity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnActivity.SfnActivity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sfnActivity.SfnActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig">SfnActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sfnActivity.SfnActivity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sfnActivity.SfnActivity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sfnActivity.SfnActivity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnActivity.SfnActivity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sfnActivity.SfnActivity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sfnActivity.SfnActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sfnActivity.SfnActivity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sfnActivity.SfnActivity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sfnActivity.SfnActivity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sfnActivity.SfnActivity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sfnActivity.SfnActivity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sfnActivity.SfnActivity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sfnActivity.SfnActivity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sfnActivity.SfnActivity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnActivity.SfnActivity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnActivity.SfnActivity.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sfnActivity.SfnActivity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnActivity.SfnActivity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sfnActivity.SfnActivity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sfnActivity.SfnActivity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sfnActivity.SfnActivity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sfnActivity.SfnActivity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sfnActivity.SfnActivity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.sfnActivity.SfnActivity.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value SfnActivityEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sfnActivity.SfnActivity.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration">SfnActivityEncryptionConfiguration</a>

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-aws.sfnActivity.SfnActivity.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sfnActivity.SfnActivity.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sfnActivity.SfnActivity.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sfnActivity.SfnActivity.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SfnActivity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sfnActivity.SfnActivity.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnactivity"

sfnactivity.SfnActivity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnActivity.SfnActivity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sfnActivity.SfnActivity.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnactivity"

sfnactivity.SfnActivity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnActivity.SfnActivity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sfnActivity.SfnActivity.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnactivity"

sfnactivity.SfnActivity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sfnActivity.SfnActivity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sfnActivity.SfnActivity.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnactivity"

sfnactivity.SfnActivity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SfnActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sfnActivity.SfnActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sfnActivity.SfnActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SfnActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sfnActivity.SfnActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SfnActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sfnActivity.SfnActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SfnActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference">SfnActivityEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration">SfnActivityEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() SfnActivityEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference">SfnActivityEncryptionConfigurationOutputReference</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() SfnActivityEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration">SfnActivityEncryptionConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sfnActivity.SfnActivity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SfnActivityConfig <a name="SfnActivityConfig" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnactivity"

&sfnactivity.SfnActivityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	EncryptionConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.sfnActivity.SfnActivityEncryptionConfiguration,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#name SfnActivity#name}. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration">SfnActivityEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#id SfnActivity#id}. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#tags SfnActivity#tags}. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#tags_all SfnActivity#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#name SfnActivity#name}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration SfnActivityEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration">SfnActivityEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#encryption_configuration SfnActivity#encryption_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#id SfnActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#tags SfnActivity#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sfnActivity.SfnActivityConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#tags_all SfnActivity#tags_all}.

---

### SfnActivityEncryptionConfiguration <a name="SfnActivityEncryptionConfiguration" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnactivity"

&sfnactivity.SfnActivityEncryptionConfiguration {
	KmsDataKeyReusePeriodSeconds: *f64,
	KmsKeyId: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration.property.kmsDataKeyReusePeriodSeconds">KmsDataKeyReusePeriodSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#kms_data_key_reuse_period_seconds SfnActivity#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#kms_key_id SfnActivity#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#type SfnActivity#type}. |

---

##### `KmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="KmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration.property.kmsDataKeyReusePeriodSeconds"></a>

```go
KmsDataKeyReusePeriodSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#kms_data_key_reuse_period_seconds SfnActivity#kms_data_key_reuse_period_seconds}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#kms_key_id SfnActivity#kms_key_id}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/sfn_activity#type SfnActivity#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SfnActivityEncryptionConfigurationOutputReference <a name="SfnActivityEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sfnactivity"

sfnactivity.NewSfnActivityEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SfnActivityEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.resetKmsDataKeyReusePeriodSeconds">ResetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsDataKeyReusePeriodSeconds` <a name="ResetKmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.resetKmsDataKeyReusePeriodSeconds"></a>

```go
func ResetKmsDataKeyReusePeriodSeconds()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSecondsInput">KmsDataKeyReusePeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSeconds">KmsDataKeyReusePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration">SfnActivityEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="KmsDataKeyReusePeriodSecondsInput" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSecondsInput"></a>

```go
func KmsDataKeyReusePeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `KmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="KmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSeconds"></a>

```go
func KmsDataKeyReusePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() SfnActivityEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.sfnActivity.SfnActivityEncryptionConfiguration">SfnActivityEncryptionConfiguration</a>

---



