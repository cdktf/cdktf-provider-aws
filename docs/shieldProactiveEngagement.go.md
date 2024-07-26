# `shieldProactiveEngagement` Submodule <a name="`shieldProactiveEngagement` Submodule" id="@cdktf/provider-aws.shieldProactiveEngagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProactiveEngagement <a name="ShieldProactiveEngagement" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement aws_shield_proactive_engagement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldproactiveengagement"

shieldproactiveengagement.NewShieldProactiveEngagement(scope Construct, id *string, config ShieldProactiveEngagementConfig) ShieldProactiveEngagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact">PutEmergencyContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetEmergencyContact">ResetEmergencyContact</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmergencyContact` <a name="PutEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact"></a>

```go
func PutEmergencyContact(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEmergencyContact` <a name="ResetEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetEmergencyContact"></a>

```go
func ResetEmergencyContact()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldProactiveEngagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldproactiveengagement"

shieldproactiveengagement.ShieldProactiveEngagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldproactiveengagement"

shieldproactiveengagement.ShieldProactiveEngagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldproactiveengagement"

shieldproactiveengagement.ShieldProactiveEngagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldproactiveengagement"

shieldproactiveengagement.ShieldProactiveEngagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ShieldProactiveEngagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ShieldProactiveEngagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ShieldProactiveEngagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ShieldProactiveEngagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContact">EmergencyContact</a></code> | <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList">ShieldProactiveEngagementEmergencyContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactInput">EmergencyContactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmergencyContact`<sup>Required</sup> <a name="EmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContact"></a>

```go
func EmergencyContact() ShieldProactiveEngagementEmergencyContactList
```

- *Type:* <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList">ShieldProactiveEngagementEmergencyContactList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `EmergencyContactInput`<sup>Optional</sup> <a name="EmergencyContactInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactInput"></a>

```go
func EmergencyContactInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProactiveEngagementConfig <a name="ShieldProactiveEngagementConfig" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldproactiveengagement"

&shieldproactiveengagement.ShieldProactiveEngagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	EmergencyContact: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContact">EmergencyContact</a></code> | <code>interface{}</code> | emergency_contact block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}.

---

##### `EmergencyContact`<sup>Optional</sup> <a name="EmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContact"></a>

```go
EmergencyContact interface{}
```

- *Type:* interface{}

emergency_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#emergency_contact ShieldProactiveEngagement#emergency_contact}

---

### ShieldProactiveEngagementEmergencyContact <a name="ShieldProactiveEngagementEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldproactiveengagement"

&shieldproactiveengagement.ShieldProactiveEngagementEmergencyContact {
	EmailAddress: *string,
	ContactNotes: *string,
	PhoneNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.contactNotes">ContactNotes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}. |

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}.

---

##### `ContactNotes`<sup>Optional</sup> <a name="ContactNotes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.contactNotes"></a>

```go
ContactNotes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProactiveEngagementEmergencyContactList <a name="ShieldProactiveEngagementEmergencyContactList" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldproactiveengagement"

shieldproactiveengagement.NewShieldProactiveEngagementEmergencyContactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ShieldProactiveEngagementEmergencyContactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get"></a>

```go
func Get(index *f64) ShieldProactiveEngagementEmergencyContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ShieldProactiveEngagementEmergencyContactOutputReference <a name="ShieldProactiveEngagementEmergencyContactOutputReference" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldproactiveengagement"

shieldproactiveengagement.NewShieldProactiveEngagementEmergencyContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ShieldProactiveEngagementEmergencyContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetContactNotes">ResetContactNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactNotes` <a name="ResetContactNotes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetContactNotes"></a>

```go
func ResetContactNotes()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotesInput">ContactNotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotes">ContactNotes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContactNotesInput`<sup>Optional</sup> <a name="ContactNotesInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotesInput"></a>

```go
func ContactNotesInput() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `ContactNotes`<sup>Required</sup> <a name="ContactNotes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotes"></a>

```go
func ContactNotes() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



