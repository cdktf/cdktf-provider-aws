# `iamUserSshKey` Submodule <a name="`iamUserSshKey` Submodule" id="@cdktf/provider-aws.iamUserSshKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserSshKey <a name="IamUserSshKey" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key aws_iam_user_ssh_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamusersshkey"

iamusersshkey.NewIamUserSshKey(scope Construct, id *string, config IamUserSshKeyConfig) IamUserSshKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig">IamUserSshKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig">IamUserSshKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamUserSshKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamusersshkey"

iamusersshkey.IamUserSshKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamusersshkey"

iamusersshkey.IamUserSshKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamusersshkey"

iamusersshkey.IamUserSshKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamusersshkey"

iamusersshkey.IamUserSshKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IamUserSshKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamUserSshKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamUserSshKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IamUserSshKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.sshPublicKeyId">SshPublicKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `SshPublicKeyId`<sup>Required</sup> <a name="SshPublicKeyId" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.sshPublicKeyId"></a>

```go
func SshPublicKeyId() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserSshKeyConfig <a name="IamUserSshKeyConfig" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/iamusersshkey"

&iamusersshkey.IamUserSshKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Encoding: *string,
	PublicKey: *string,
	Username: *string,
	Id: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#encoding IamUserSshKey#encoding}. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.publicKey">PublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#public_key IamUserSshKey#public_key}. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#username IamUserSshKey#username}. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#id IamUserSshKey#id}. |
| <code><a href="#@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#status IamUserSshKey#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#encoding IamUserSshKey#encoding}.

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#public_key IamUserSshKey#public_key}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#username IamUserSshKey#username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#id IamUserSshKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.iamUserSshKey.IamUserSshKeyConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_ssh_key#status IamUserSshKey#status}.

---



