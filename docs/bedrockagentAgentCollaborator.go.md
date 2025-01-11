# `bedrockagentAgentCollaborator` Submodule <a name="`bedrockagentAgentCollaborator` Submodule" id="@cdktf/provider-aws.bedrockagentAgentCollaborator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentCollaborator <a name="BedrockagentAgentCollaborator" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator aws_bedrockagent_agent_collaborator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

bedrockagentagentcollaborator.NewBedrockagentAgentCollaborator(scope Construct, id *string, config BedrockagentAgentCollaboratorConfig) BedrockagentAgentCollaborator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig">BedrockagentAgentCollaboratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig">BedrockagentAgentCollaboratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor">PutAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentDescriptor">ResetAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentVersion">ResetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetPrepareAgent">ResetPrepareAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRelayConversationHistory">ResetRelayConversationHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentDescriptor` <a name="PutAgentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor"></a>

```go
func PutAgentDescriptor(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts"></a>

```go
func PutTimeouts(value BedrockagentAgentCollaboratorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

---

##### `ResetAgentDescriptor` <a name="ResetAgentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentDescriptor"></a>

```go
func ResetAgentDescriptor()
```

##### `ResetAgentVersion` <a name="ResetAgentVersion" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentVersion"></a>

```go
func ResetAgentVersion()
```

##### `ResetPrepareAgent` <a name="ResetPrepareAgent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetPrepareAgent"></a>

```go
func ResetPrepareAgent()
```

##### `ResetRelayConversationHistory` <a name="ResetRelayConversationHistory" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRelayConversationHistory"></a>

```go
func ResetRelayConversationHistory()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentAgentCollaborator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

bedrockagentagentcollaborator.BedrockagentAgentCollaborator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

bedrockagentagentcollaborator.BedrockagentAgentCollaborator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

bedrockagentagentcollaborator.BedrockagentAgentCollaborator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

bedrockagentagentcollaborator.BedrockagentAgentCollaborator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BedrockagentAgentCollaborator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentAgentCollaborator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentAgentCollaborator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentCollaborator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptor">AgentDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList">BedrockagentAgentCollaboratorAgentDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorId">CollaboratorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference">BedrockagentAgentCollaboratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptorInput">AgentDescriptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentIdInput">AgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersionInput">AgentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstructionInput">CollaborationInstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorNameInput">CollaboratorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgentInput">PrepareAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistoryInput">RelayConversationHistoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstruction">CollaborationInstruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorName">CollaboratorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgent">PrepareAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistory">RelayConversationHistory</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentDescriptor`<sup>Required</sup> <a name="AgentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptor"></a>

```go
func AgentDescriptor() BedrockagentAgentCollaboratorAgentDescriptorList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList">BedrockagentAgentCollaboratorAgentDescriptorList</a>

---

##### `CollaboratorId`<sup>Required</sup> <a name="CollaboratorId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorId"></a>

```go
func CollaboratorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeouts"></a>

```go
func Timeouts() BedrockagentAgentCollaboratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference">BedrockagentAgentCollaboratorTimeoutsOutputReference</a>

---

##### `AgentDescriptorInput`<sup>Optional</sup> <a name="AgentDescriptorInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptorInput"></a>

```go
func AgentDescriptorInput() interface{}
```

- *Type:* interface{}

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentIdInput"></a>

```go
func AgentIdInput() *string
```

- *Type:* *string

---

##### `AgentVersionInput`<sup>Optional</sup> <a name="AgentVersionInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersionInput"></a>

```go
func AgentVersionInput() *string
```

- *Type:* *string

---

##### `CollaborationInstructionInput`<sup>Optional</sup> <a name="CollaborationInstructionInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstructionInput"></a>

```go
func CollaborationInstructionInput() *string
```

- *Type:* *string

---

##### `CollaboratorNameInput`<sup>Optional</sup> <a name="CollaboratorNameInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorNameInput"></a>

```go
func CollaboratorNameInput() *string
```

- *Type:* *string

---

##### `PrepareAgentInput`<sup>Optional</sup> <a name="PrepareAgentInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgentInput"></a>

```go
func PrepareAgentInput() interface{}
```

- *Type:* interface{}

---

##### `RelayConversationHistoryInput`<sup>Optional</sup> <a name="RelayConversationHistoryInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistoryInput"></a>

```go
func RelayConversationHistoryInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersion"></a>

```go
func AgentVersion() *string
```

- *Type:* *string

---

##### `CollaborationInstruction`<sup>Required</sup> <a name="CollaborationInstruction" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstruction"></a>

```go
func CollaborationInstruction() *string
```

- *Type:* *string

---

##### `CollaboratorName`<sup>Required</sup> <a name="CollaboratorName" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorName"></a>

```go
func CollaboratorName() *string
```

- *Type:* *string

---

##### `PrepareAgent`<sup>Required</sup> <a name="PrepareAgent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgent"></a>

```go
func PrepareAgent() interface{}
```

- *Type:* interface{}

---

##### `RelayConversationHistory`<sup>Required</sup> <a name="RelayConversationHistory" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistory"></a>

```go
func RelayConversationHistory() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentCollaboratorAgentDescriptor <a name="BedrockagentAgentCollaboratorAgentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

&bedrockagentagentcollaborator.BedrockagentAgentCollaboratorAgentDescriptor {
	AliasArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.property.aliasArn">AliasArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}. |

---

##### `AliasArn`<sup>Required</sup> <a name="AliasArn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.property.aliasArn"></a>

```go
AliasArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}.

---

### BedrockagentAgentCollaboratorConfig <a name="BedrockagentAgentCollaboratorConfig" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

&bedrockagentagentcollaborator.BedrockagentAgentCollaboratorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentId: *string,
	CollaborationInstruction: *string,
	CollaboratorName: *string,
	AgentDescriptor: interface{},
	AgentVersion: *string,
	PrepareAgent: interface{},
	RelayConversationHistory: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentId">AgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaborationInstruction">CollaborationInstruction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaboratorName">CollaboratorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentDescriptor">AgentDescriptor</a></code> | <code>interface{}</code> | agent_descriptor block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.prepareAgent">PrepareAgent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.relayConversationHistory">RelayConversationHistory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentId"></a>

```go
AgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}.

---

##### `CollaborationInstruction`<sup>Required</sup> <a name="CollaborationInstruction" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaborationInstruction"></a>

```go
CollaborationInstruction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}.

---

##### `CollaboratorName`<sup>Required</sup> <a name="CollaboratorName" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaboratorName"></a>

```go
CollaboratorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}.

---

##### `AgentDescriptor`<sup>Optional</sup> <a name="AgentDescriptor" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentDescriptor"></a>

```go
AgentDescriptor interface{}
```

- *Type:* interface{}

agent_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#agent_descriptor BedrockagentAgentCollaborator#agent_descriptor}

---

##### `AgentVersion`<sup>Optional</sup> <a name="AgentVersion" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentVersion"></a>

```go
AgentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}.

---

##### `PrepareAgent`<sup>Optional</sup> <a name="PrepareAgent" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.prepareAgent"></a>

```go
PrepareAgent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}.

---

##### `RelayConversationHistory`<sup>Optional</sup> <a name="RelayConversationHistory" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.relayConversationHistory"></a>

```go
RelayConversationHistory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.timeouts"></a>

```go
Timeouts BedrockagentAgentCollaboratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#timeouts BedrockagentAgentCollaborator#timeouts}

---

### BedrockagentAgentCollaboratorTimeouts <a name="BedrockagentAgentCollaboratorTimeouts" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

&bedrockagentagentcollaborator.BedrockagentAgentCollaboratorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#create BedrockagentAgentCollaborator#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#delete BedrockagentAgentCollaborator#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/bedrockagent_agent_collaborator#update BedrockagentAgentCollaborator#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentCollaboratorAgentDescriptorList <a name="BedrockagentAgentCollaboratorAgentDescriptorList" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

bedrockagentagentcollaborator.NewBedrockagentAgentCollaboratorAgentDescriptorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentAgentCollaboratorAgentDescriptorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get"></a>

```go
func Get(index *f64) BedrockagentAgentCollaboratorAgentDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentCollaboratorAgentDescriptorOutputReference <a name="BedrockagentAgentCollaboratorAgentDescriptorOutputReference" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

bedrockagentagentcollaborator.NewBedrockagentAgentCollaboratorAgentDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentAgentCollaboratorAgentDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArnInput">AliasArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArn">AliasArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasArnInput`<sup>Optional</sup> <a name="AliasArnInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArnInput"></a>

```go
func AliasArnInput() *string
```

- *Type:* *string

---

##### `AliasArn`<sup>Required</sup> <a name="AliasArn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArn"></a>

```go
func AliasArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentCollaboratorTimeoutsOutputReference <a name="BedrockagentAgentCollaboratorTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/bedrockagentagentcollaborator"

bedrockagentagentcollaborator.NewBedrockagentAgentCollaboratorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentAgentCollaboratorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



