# `securityhubConfigurationPolicy` Submodule <a name="`securityhubConfigurationPolicy` Submodule" id="@cdktf/provider-aws.securityhubConfigurationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConfigurationPolicy <a name="SecurityhubConfigurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy aws_securityhub_configuration_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicy(scope Construct, id *string, config SecurityhubConfigurationPolicyConfig) SecurityhubConfigurationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig">SecurityhubConfigurationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig">SecurityhubConfigurationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy">PutConfigurationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigurationPolicy` <a name="PutConfigurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy"></a>

```go
func PutConfigurationPolicy(value SecurityhubConfigurationPolicyConfigurationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityhubConfigurationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.SecurityhubConfigurationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.SecurityhubConfigurationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.SecurityhubConfigurationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.SecurityhubConfigurationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityhubConfigurationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityhubConfigurationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityhubConfigurationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityhubConfigurationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicy">ConfigurationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference">SecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyInput">ConfigurationPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfigurationPolicy`<sup>Required</sup> <a name="ConfigurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicy"></a>

```go
func ConfigurationPolicy() SecurityhubConfigurationPolicyConfigurationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference">SecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a>

---

##### `ConfigurationPolicyInput`<sup>Optional</sup> <a name="ConfigurationPolicyInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyInput"></a>

```go
func ConfigurationPolicyInput() SecurityhubConfigurationPolicyConfigurationPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConfigurationPolicyConfig <a name="SecurityhubConfigurationPolicyConfig" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigurationPolicy: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy,
	Name: *string,
	Description: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.configurationPolicy">ConfigurationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | configuration_policy block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#description SecurityhubConfigurationPolicy#description}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#id SecurityhubConfigurationPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationPolicy`<sup>Required</sup> <a name="ConfigurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.configurationPolicy"></a>

```go
ConfigurationPolicy SecurityhubConfigurationPolicyConfigurationPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

configuration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#configuration_policy SecurityhubConfigurationPolicy#configuration_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#description SecurityhubConfigurationPolicy#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#id SecurityhubConfigurationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SecurityhubConfigurationPolicyConfigurationPolicy <a name="SecurityhubConfigurationPolicyConfigurationPolicy" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicy {
	ServiceEnabled: interface{},
	EnabledStandardArns: *[]*string,
	SecurityControlsConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.serviceEnabled">ServiceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#service_enabled SecurityhubConfigurationPolicy#service_enabled}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.enabledStandardArns">EnabledStandardArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#enabled_standard_arns SecurityhubConfigurationPolicy#enabled_standard_arns}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.securityControlsConfiguration">SecurityControlsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a></code> | security_controls_configuration block. |

---

##### `ServiceEnabled`<sup>Required</sup> <a name="ServiceEnabled" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.serviceEnabled"></a>

```go
ServiceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#service_enabled SecurityhubConfigurationPolicy#service_enabled}.

---

##### `EnabledStandardArns`<sup>Optional</sup> <a name="EnabledStandardArns" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.enabledStandardArns"></a>

```go
EnabledStandardArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#enabled_standard_arns SecurityhubConfigurationPolicy#enabled_standard_arns}.

---

##### `SecurityControlsConfiguration`<sup>Optional</sup> <a name="SecurityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.securityControlsConfiguration"></a>

```go
SecurityControlsConfiguration SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a>

security_controls_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#security_controls_configuration SecurityhubConfigurationPolicy#security_controls_configuration}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration {
	DisabledControlIdentifiers: *[]*string,
	EnabledControlIdentifiers: *[]*string,
	SecurityControlCustomParameter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.disabledControlIdentifiers">DisabledControlIdentifiers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#disabled_control_identifiers SecurityhubConfigurationPolicy#disabled_control_identifiers}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.enabledControlIdentifiers">EnabledControlIdentifiers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#enabled_control_identifiers SecurityhubConfigurationPolicy#enabled_control_identifiers}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.securityControlCustomParameter">SecurityControlCustomParameter</a></code> | <code>interface{}</code> | security_control_custom_parameter block. |

---

##### `DisabledControlIdentifiers`<sup>Optional</sup> <a name="DisabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.disabledControlIdentifiers"></a>

```go
DisabledControlIdentifiers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#disabled_control_identifiers SecurityhubConfigurationPolicy#disabled_control_identifiers}.

---

##### `EnabledControlIdentifiers`<sup>Optional</sup> <a name="EnabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.enabledControlIdentifiers"></a>

```go
EnabledControlIdentifiers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#enabled_control_identifiers SecurityhubConfigurationPolicy#enabled_control_identifiers}.

---

##### `SecurityControlCustomParameter`<sup>Optional</sup> <a name="SecurityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration.property.securityControlCustomParameter"></a>

```go
SecurityControlCustomParameter interface{}
```

- *Type:* interface{}

security_control_custom_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#security_control_custom_parameter SecurityhubConfigurationPolicy#security_control_custom_parameter}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter {
	Parameter: interface{},
	SecurityControlId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#security_control_id SecurityhubConfigurationPolicy#security_control_id}. |

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#parameter SecurityhubConfigurationPolicy#parameter}

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter.property.securityControlId"></a>

```go
SecurityControlId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#security_control_id SecurityhubConfigurationPolicy#security_control_id}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter {
	Name: *string,
	ValueType: *string,
	Bool: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool,
	Double: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble,
	Enum: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum,
	EnumList: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct,
	Int: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt,
	IntList: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct,
	String: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString,
	StringList: github.com/cdktf/cdktf-provider-aws-go/aws/v19.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.valueType">ValueType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value_type SecurityhubConfigurationPolicy#value_type}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.bool">Bool</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a></code> | bool block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.double">Double</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a></code> | double block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.enum">Enum</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a></code> | enum block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.enumList">EnumList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a></code> | enum_list block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.int">Int</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a></code> | int block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.intList">IntList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a></code> | int_list block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.string">String</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a></code> | string block. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.stringList">StringList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a></code> | string_list block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}.

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value_type SecurityhubConfigurationPolicy#value_type}.

---

##### `Bool`<sup>Optional</sup> <a name="Bool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.bool"></a>

```go
Bool SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a>

bool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#bool SecurityhubConfigurationPolicy#bool}

---

##### `Double`<sup>Optional</sup> <a name="Double" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.double"></a>

```go
Double SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a>

double block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#double SecurityhubConfigurationPolicy#double}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.enum"></a>

```go
Enum SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a>

enum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#enum SecurityhubConfigurationPolicy#enum}

---

##### `EnumList`<sup>Optional</sup> <a name="EnumList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.enumList"></a>

```go
EnumList SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a>

enum_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#enum_list SecurityhubConfigurationPolicy#enum_list}

---

##### `Int`<sup>Optional</sup> <a name="Int" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.int"></a>

```go
Int SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a>

int block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#int SecurityhubConfigurationPolicy#int}

---

##### `IntList`<sup>Optional</sup> <a name="IntList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.intList"></a>

```go
IntList SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a>

int_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#int_list SecurityhubConfigurationPolicy#int_list}

---

##### `String`<sup>Optional</sup> <a name="String" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.string"></a>

```go
String SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a>

string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#string SecurityhubConfigurationPolicy#string}

---

##### `StringList`<sup>Optional</sup> <a name="StringList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter.property.stringList"></a>

```go
StringList SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a>

string_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#string_list SecurityhubConfigurationPolicy#string_list}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool {
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct {
	Value: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct.property.value">Value</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct {
	Value: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct.property.value">Value</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct.property.value"></a>

```go
Value *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct {
	Value: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct.property.value">Value</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConfigurationPolicyConfigurationPolicyOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicyOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityControlsConfiguration">PutSecurityControlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetEnabledStandardArns">ResetEnabledStandardArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetSecurityControlsConfiguration">ResetSecurityControlsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecurityControlsConfiguration` <a name="PutSecurityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityControlsConfiguration"></a>

```go
func PutSecurityControlsConfiguration(value SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityControlsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a>

---

##### `ResetEnabledStandardArns` <a name="ResetEnabledStandardArns" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetEnabledStandardArns"></a>

```go
func ResetEnabledStandardArns()
```

##### `ResetSecurityControlsConfiguration` <a name="ResetSecurityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetSecurityControlsConfiguration"></a>

```go
func ResetSecurityControlsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityControlsConfiguration">SecurityControlsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.enabledStandardArnsInput">EnabledStandardArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityControlsConfigurationInput">SecurityControlsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.serviceEnabledInput">ServiceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.enabledStandardArns">EnabledStandardArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.serviceEnabled">ServiceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityControlsConfiguration`<sup>Required</sup> <a name="SecurityControlsConfiguration" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityControlsConfiguration"></a>

```go
func SecurityControlsConfiguration() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference</a>

---

##### `EnabledStandardArnsInput`<sup>Optional</sup> <a name="EnabledStandardArnsInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.enabledStandardArnsInput"></a>

```go
func EnabledStandardArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityControlsConfigurationInput`<sup>Optional</sup> <a name="SecurityControlsConfigurationInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityControlsConfigurationInput"></a>

```go
func SecurityControlsConfigurationInput() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a>

---

##### `ServiceEnabledInput`<sup>Optional</sup> <a name="ServiceEnabledInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.serviceEnabledInput"></a>

```go
func ServiceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledStandardArns`<sup>Required</sup> <a name="EnabledStandardArns" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.enabledStandardArns"></a>

```go
func EnabledStandardArns() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceEnabled`<sup>Required</sup> <a name="ServiceEnabled" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.serviceEnabled"></a>

```go
func ServiceEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.putSecurityControlCustomParameter">PutSecurityControlCustomParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetDisabledControlIdentifiers">ResetDisabledControlIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetEnabledControlIdentifiers">ResetEnabledControlIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetSecurityControlCustomParameter">ResetSecurityControlCustomParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecurityControlCustomParameter` <a name="PutSecurityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.putSecurityControlCustomParameter"></a>

```go
func PutSecurityControlCustomParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.putSecurityControlCustomParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisabledControlIdentifiers` <a name="ResetDisabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetDisabledControlIdentifiers"></a>

```go
func ResetDisabledControlIdentifiers()
```

##### `ResetEnabledControlIdentifiers` <a name="ResetEnabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetEnabledControlIdentifiers"></a>

```go
func ResetEnabledControlIdentifiers()
```

##### `ResetSecurityControlCustomParameter` <a name="ResetSecurityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.resetSecurityControlCustomParameter"></a>

```go
func ResetSecurityControlCustomParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.securityControlCustomParameter">SecurityControlCustomParameter</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.disabledControlIdentifiersInput">DisabledControlIdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.enabledControlIdentifiersInput">EnabledControlIdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.securityControlCustomParameterInput">SecurityControlCustomParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.disabledControlIdentifiers">DisabledControlIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.enabledControlIdentifiers">EnabledControlIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityControlCustomParameter`<sup>Required</sup> <a name="SecurityControlCustomParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.securityControlCustomParameter"></a>

```go
func SecurityControlCustomParameter() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList</a>

---

##### `DisabledControlIdentifiersInput`<sup>Optional</sup> <a name="DisabledControlIdentifiersInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.disabledControlIdentifiersInput"></a>

```go
func DisabledControlIdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledControlIdentifiersInput`<sup>Optional</sup> <a name="EnabledControlIdentifiersInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.enabledControlIdentifiersInput"></a>

```go
func EnabledControlIdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityControlCustomParameterInput`<sup>Optional</sup> <a name="SecurityControlCustomParameterInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.securityControlCustomParameterInput"></a>

```go
func SecurityControlCustomParameterInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledControlIdentifiers`<sup>Required</sup> <a name="DisabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.disabledControlIdentifiers"></a>

```go
func DisabledControlIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledControlIdentifiers`<sup>Required</sup> <a name="EnabledControlIdentifiers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.enabledControlIdentifiers"></a>

```go
func EnabledControlIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.get"></a>

```go
func Get(index *f64) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.putParameter">PutParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.putParameter.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.securityControlIdInput">SecurityControlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.parameter"></a>

```go
func Parameter() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList</a>

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityControlIdInput`<sup>Optional</sup> <a name="SecurityControlIdInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.securityControlIdInput"></a>

```go
func SecurityControlIdInput() *string
```

- *Type:* *string

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.securityControlId"></a>

```go
func SecurityControlId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.value">Value</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.value"></a>

```go
func Value() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.get"></a>

```go
func Get(index *f64) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putBool">PutBool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putDouble">PutDouble</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnum">PutEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnumList">PutEnumList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putInt">PutInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putIntList">PutIntList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putString">PutString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putStringList">PutStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetBool">ResetBool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetDouble">ResetDouble</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetEnumList">ResetEnumList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetInt">ResetInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetIntList">ResetIntList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetString">ResetString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetStringList">ResetStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBool` <a name="PutBool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putBool"></a>

```go
func PutBool(value SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putBool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a>

---

##### `PutDouble` <a name="PutDouble" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putDouble"></a>

```go
func PutDouble(value SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putDouble.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a>

---

##### `PutEnum` <a name="PutEnum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnum"></a>

```go
func PutEnum(value SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a>

---

##### `PutEnumList` <a name="PutEnumList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnumList"></a>

```go
func PutEnumList(value SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putEnumList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a>

---

##### `PutInt` <a name="PutInt" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putInt"></a>

```go
func PutInt(value SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putInt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a>

---

##### `PutIntList` <a name="PutIntList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putIntList"></a>

```go
func PutIntList(value SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putIntList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a>

---

##### `PutString` <a name="PutString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putString"></a>

```go
func PutString(value SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putString.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a>

---

##### `PutStringList` <a name="PutStringList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putStringList"></a>

```go
func PutStringList(value SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.putStringList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a>

---

##### `ResetBool` <a name="ResetBool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetBool"></a>

```go
func ResetBool()
```

##### `ResetDouble` <a name="ResetDouble" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetDouble"></a>

```go
func ResetDouble()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetEnumList` <a name="ResetEnumList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetEnumList"></a>

```go
func ResetEnumList()
```

##### `ResetInt` <a name="ResetInt" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetInt"></a>

```go
func ResetInt()
```

##### `ResetIntList` <a name="ResetIntList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetIntList"></a>

```go
func ResetIntList()
```

##### `ResetString` <a name="ResetString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetString"></a>

```go
func ResetString()
```

##### `ResetStringList` <a name="ResetStringList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.resetStringList"></a>

```go
func ResetStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.bool">Bool</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.double">Double</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enum">Enum</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumList">EnumList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.int">Int</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intList">IntList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.string">String</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringList">StringList</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.boolInput">BoolInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.doubleInput">DoubleInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumInput">EnumInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumListInput">EnumListInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intInput">IntInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intListInput">IntListInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringInput">StringInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringListInput">StringListInput</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bool`<sup>Required</sup> <a name="Bool" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.bool"></a>

```go
func Bool() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference</a>

---

##### `Double`<sup>Required</sup> <a name="Double" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.double"></a>

```go
func Double() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference</a>

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enum"></a>

```go
func Enum() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference</a>

---

##### `EnumList`<sup>Required</sup> <a name="EnumList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumList"></a>

```go
func EnumList() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference</a>

---

##### `Int`<sup>Required</sup> <a name="Int" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.int"></a>

```go
func Int() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference</a>

---

##### `IntList`<sup>Required</sup> <a name="IntList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intList"></a>

```go
func IntList() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference</a>

---

##### `String`<sup>Required</sup> <a name="String" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.string"></a>

```go
func String() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference</a>

---

##### `StringList`<sup>Required</sup> <a name="StringList" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringList"></a>

```go
func StringList() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference</a>

---

##### `BoolInput`<sup>Optional</sup> <a name="BoolInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.boolInput"></a>

```go
func BoolInput() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool</a>

---

##### `DoubleInput`<sup>Optional</sup> <a name="DoubleInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.doubleInput"></a>

```go
func DoubleInput() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble</a>

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumInput"></a>

```go
func EnumInput() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum</a>

---

##### `EnumListInput`<sup>Optional</sup> <a name="EnumListInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.enumListInput"></a>

```go
func EnumListInput() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct</a>

---

##### `IntInput`<sup>Optional</sup> <a name="IntInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intInput"></a>

```go
func IntInput() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt</a>

---

##### `IntListInput`<sup>Optional</sup> <a name="IntListInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.intListInput"></a>

```go
func IntListInput() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StringInput`<sup>Optional</sup> <a name="StringInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringInput"></a>

```go
func StringInput() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a>

---

##### `StringListInput`<sup>Optional</sup> <a name="StringListInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.stringListInput"></a>

```go
func StringListInput() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a>

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString">SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString</a>

---



