# `bedrockagentAgentActionGroup` Submodule <a name="`bedrockagentAgentActionGroup` Submodule" id="@cdktf/provider-aws.bedrockagentAgentActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentActionGroup <a name="BedrockagentAgentActionGroup" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group aws_bedrockagent_agent_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroup(scope Construct, id *string, config BedrockagentAgentActionGroupConfig) BedrockagentAgentActionGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig">BedrockagentAgentActionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig">BedrockagentAgentActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putActionGroupExecutor">PutActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putApiSchema">PutApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putFunctionSchema">PutFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupExecutor">ResetActionGroupExecutor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupState">ResetActionGroupState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetApiSchema">ResetApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetFunctionSchema">ResetFunctionSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetParentActionGroupSignature">ResetParentActionGroupSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetPrepareAgent">ResetPrepareAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetSkipResourceInUseCheck">ResetSkipResourceInUseCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionGroupExecutor` <a name="PutActionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putActionGroupExecutor"></a>

```go
func PutActionGroupExecutor(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putActionGroupExecutor.parameter.value"></a>

- *Type:* interface{}

---

##### `PutApiSchema` <a name="PutApiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putApiSchema"></a>

```go
func PutApiSchema(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putApiSchema.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFunctionSchema` <a name="PutFunctionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putFunctionSchema"></a>

```go
func PutFunctionSchema(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putFunctionSchema.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts"></a>

```go
func PutTimeouts(value BedrockagentAgentActionGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>

---

##### `ResetActionGroupExecutor` <a name="ResetActionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupExecutor"></a>

```go
func ResetActionGroupExecutor()
```

##### `ResetActionGroupState` <a name="ResetActionGroupState" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetActionGroupState"></a>

```go
func ResetActionGroupState()
```

##### `ResetApiSchema` <a name="ResetApiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetApiSchema"></a>

```go
func ResetApiSchema()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFunctionSchema` <a name="ResetFunctionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetFunctionSchema"></a>

```go
func ResetFunctionSchema()
```

##### `ResetParentActionGroupSignature` <a name="ResetParentActionGroupSignature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetParentActionGroupSignature"></a>

```go
func ResetParentActionGroupSignature()
```

##### `ResetPrepareAgent` <a name="ResetPrepareAgent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetPrepareAgent"></a>

```go
func ResetPrepareAgent()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSkipResourceInUseCheck` <a name="ResetSkipResourceInUseCheck" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetSkipResourceInUseCheck"></a>

```go
func ResetSkipResourceInUseCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentAgentActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.BedrockagentAgentActionGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.BedrockagentAgentActionGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.BedrockagentAgentActionGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.BedrockagentAgentActionGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BedrockagentAgentActionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentAgentActionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentAgentActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutor">ActionGroupExecutor</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList">BedrockagentAgentActionGroupActionGroupExecutorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupId">ActionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchema">ApiSchema</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList">BedrockagentAgentActionGroupApiSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchema">FunctionSchema</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList">BedrockagentAgentActionGroupFunctionSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference">BedrockagentAgentActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutorInput">ActionGroupExecutorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupNameInput">ActionGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupStateInput">ActionGroupStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentIdInput">AgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersionInput">AgentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchemaInput">ApiSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchemaInput">FunctionSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignatureInput">ParentActionGroupSignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgentInput">PrepareAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheckInput">SkipResourceInUseCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupName">ActionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupState">ActionGroupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignature">ParentActionGroupSignature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgent">PrepareAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheck">SkipResourceInUseCheck</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionGroupExecutor`<sup>Required</sup> <a name="ActionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutor"></a>

```go
func ActionGroupExecutor() BedrockagentAgentActionGroupActionGroupExecutorList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList">BedrockagentAgentActionGroupActionGroupExecutorList</a>

---

##### `ActionGroupId`<sup>Required</sup> <a name="ActionGroupId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupId"></a>

```go
func ActionGroupId() *string
```

- *Type:* *string

---

##### `ApiSchema`<sup>Required</sup> <a name="ApiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchema"></a>

```go
func ApiSchema() BedrockagentAgentActionGroupApiSchemaList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList">BedrockagentAgentActionGroupApiSchemaList</a>

---

##### `FunctionSchema`<sup>Required</sup> <a name="FunctionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchema"></a>

```go
func FunctionSchema() BedrockagentAgentActionGroupFunctionSchemaList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList">BedrockagentAgentActionGroupFunctionSchemaList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeouts"></a>

```go
func Timeouts() BedrockagentAgentActionGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference">BedrockagentAgentActionGroupTimeoutsOutputReference</a>

---

##### `ActionGroupExecutorInput`<sup>Optional</sup> <a name="ActionGroupExecutorInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupExecutorInput"></a>

```go
func ActionGroupExecutorInput() interface{}
```

- *Type:* interface{}

---

##### `ActionGroupNameInput`<sup>Optional</sup> <a name="ActionGroupNameInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupNameInput"></a>

```go
func ActionGroupNameInput() *string
```

- *Type:* *string

---

##### `ActionGroupStateInput`<sup>Optional</sup> <a name="ActionGroupStateInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupStateInput"></a>

```go
func ActionGroupStateInput() *string
```

- *Type:* *string

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentIdInput"></a>

```go
func AgentIdInput() *string
```

- *Type:* *string

---

##### `AgentVersionInput`<sup>Optional</sup> <a name="AgentVersionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersionInput"></a>

```go
func AgentVersionInput() *string
```

- *Type:* *string

---

##### `ApiSchemaInput`<sup>Optional</sup> <a name="ApiSchemaInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.apiSchemaInput"></a>

```go
func ApiSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FunctionSchemaInput`<sup>Optional</sup> <a name="FunctionSchemaInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.functionSchemaInput"></a>

```go
func FunctionSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `ParentActionGroupSignatureInput`<sup>Optional</sup> <a name="ParentActionGroupSignatureInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignatureInput"></a>

```go
func ParentActionGroupSignatureInput() *string
```

- *Type:* *string

---

##### `PrepareAgentInput`<sup>Optional</sup> <a name="PrepareAgentInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgentInput"></a>

```go
func PrepareAgentInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SkipResourceInUseCheckInput`<sup>Optional</sup> <a name="SkipResourceInUseCheckInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheckInput"></a>

```go
func SkipResourceInUseCheckInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActionGroupName`<sup>Required</sup> <a name="ActionGroupName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupName"></a>

```go
func ActionGroupName() *string
```

- *Type:* *string

---

##### `ActionGroupState`<sup>Required</sup> <a name="ActionGroupState" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.actionGroupState"></a>

```go
func ActionGroupState() *string
```

- *Type:* *string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.agentVersion"></a>

```go
func AgentVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ParentActionGroupSignature`<sup>Required</sup> <a name="ParentActionGroupSignature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.parentActionGroupSignature"></a>

```go
func ParentActionGroupSignature() *string
```

- *Type:* *string

---

##### `PrepareAgent`<sup>Required</sup> <a name="PrepareAgent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.prepareAgent"></a>

```go
func PrepareAgent() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SkipResourceInUseCheck`<sup>Required</sup> <a name="SkipResourceInUseCheck" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.skipResourceInUseCheck"></a>

```go
func SkipResourceInUseCheck() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentActionGroupActionGroupExecutor <a name="BedrockagentAgentActionGroupActionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

&bedrockagentagentactiongroup.BedrockagentAgentActionGroupActionGroupExecutor {
	CustomControl: *string,
	Lambda: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.customControl">CustomControl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#custom_control BedrockagentAgentActionGroup#custom_control}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.lambda">Lambda</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#lambda BedrockagentAgentActionGroup#lambda}. |

---

##### `CustomControl`<sup>Optional</sup> <a name="CustomControl" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.customControl"></a>

```go
CustomControl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#custom_control BedrockagentAgentActionGroup#custom_control}.

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutor.property.lambda"></a>

```go
Lambda *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#lambda BedrockagentAgentActionGroup#lambda}.

---

### BedrockagentAgentActionGroupApiSchema <a name="BedrockagentAgentActionGroupApiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

&bedrockagentagentactiongroup.BedrockagentAgentActionGroupApiSchema {
	Payload: *string,
	S3: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.payload">Payload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#payload BedrockagentAgentActionGroup#payload}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.s3">S3</a></code> | <code>interface{}</code> | s3 block. |

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.payload"></a>

```go
Payload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#payload BedrockagentAgentActionGroup#payload}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchema.property.s3"></a>

```go
S3 interface{}
```

- *Type:* interface{}

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#s3 BedrockagentAgentActionGroup#s3}

---

### BedrockagentAgentActionGroupApiSchemaS3 <a name="BedrockagentAgentActionGroupApiSchemaS3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

&bedrockagentagentactiongroup.BedrockagentAgentActionGroupApiSchemaS3 {
	S3BucketName: *string,
	S3ObjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#s3_bucket_name BedrockagentAgentActionGroup#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3ObjectKey">S3ObjectKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#s3_object_key BedrockagentAgentActionGroup#s3_object_key}. |

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#s3_bucket_name BedrockagentAgentActionGroup#s3_bucket_name}.

---

##### `S3ObjectKey`<sup>Optional</sup> <a name="S3ObjectKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3.property.s3ObjectKey"></a>

```go
S3ObjectKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#s3_object_key BedrockagentAgentActionGroup#s3_object_key}.

---

### BedrockagentAgentActionGroupConfig <a name="BedrockagentAgentActionGroupConfig" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

&bedrockagentagentactiongroup.BedrockagentAgentActionGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActionGroupName: *string,
	AgentId: *string,
	AgentVersion: *string,
	ActionGroupExecutor: interface{},
	ActionGroupState: *string,
	ApiSchema: interface{},
	Description: *string,
	FunctionSchema: interface{},
	ParentActionGroupSignature: *string,
	PrepareAgent: interface{},
	Region: *string,
	SkipResourceInUseCheck: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupName">ActionGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentId">AgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupExecutor">ActionGroupExecutor</a></code> | <code>interface{}</code> | action_group_executor block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupState">ActionGroupState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.apiSchema">ApiSchema</a></code> | <code>interface{}</code> | api_schema block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.functionSchema">FunctionSchema</a></code> | <code>interface{}</code> | function_schema block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.parentActionGroupSignature">ParentActionGroupSignature</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.prepareAgent">PrepareAgent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.skipResourceInUseCheck">SkipResourceInUseCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionGroupName`<sup>Required</sup> <a name="ActionGroupName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupName"></a>

```go
ActionGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}.

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentId"></a>

```go
AgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}.

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.agentVersion"></a>

```go
AgentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}.

---

##### `ActionGroupExecutor`<sup>Optional</sup> <a name="ActionGroupExecutor" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupExecutor"></a>

```go
ActionGroupExecutor interface{}
```

- *Type:* interface{}

action_group_executor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#action_group_executor BedrockagentAgentActionGroup#action_group_executor}

---

##### `ActionGroupState`<sup>Optional</sup> <a name="ActionGroupState" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.actionGroupState"></a>

```go
ActionGroupState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}.

---

##### `ApiSchema`<sup>Optional</sup> <a name="ApiSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.apiSchema"></a>

```go
ApiSchema interface{}
```

- *Type:* interface{}

api_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#api_schema BedrockagentAgentActionGroup#api_schema}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `FunctionSchema`<sup>Optional</sup> <a name="FunctionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.functionSchema"></a>

```go
FunctionSchema interface{}
```

- *Type:* interface{}

function_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#function_schema BedrockagentAgentActionGroup#function_schema}

---

##### `ParentActionGroupSignature`<sup>Optional</sup> <a name="ParentActionGroupSignature" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.parentActionGroupSignature"></a>

```go
ParentActionGroupSignature *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}.

---

##### `PrepareAgent`<sup>Optional</sup> <a name="PrepareAgent" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.prepareAgent"></a>

```go
PrepareAgent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#region BedrockagentAgentActionGroup#region}

---

##### `SkipResourceInUseCheck`<sup>Optional</sup> <a name="SkipResourceInUseCheck" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.skipResourceInUseCheck"></a>

```go
SkipResourceInUseCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupConfig.property.timeouts"></a>

```go
Timeouts BedrockagentAgentActionGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts">BedrockagentAgentActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#timeouts BedrockagentAgentActionGroup#timeouts}

---

### BedrockagentAgentActionGroupFunctionSchema <a name="BedrockagentAgentActionGroupFunctionSchema" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

&bedrockagentagentactiongroup.BedrockagentAgentActionGroupFunctionSchema {
	MemberFunctions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema.property.memberFunctions">MemberFunctions</a></code> | <code>interface{}</code> | member_functions block. |

---

##### `MemberFunctions`<sup>Optional</sup> <a name="MemberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchema.property.memberFunctions"></a>

```go
MemberFunctions interface{}
```

- *Type:* interface{}

member_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#member_functions BedrockagentAgentActionGroup#member_functions}

---

### BedrockagentAgentActionGroupFunctionSchemaMemberFunctions <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

&bedrockagentagentactiongroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions {
	Functions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions.property.functions">Functions</a></code> | <code>interface{}</code> | functions block. |

---

##### `Functions`<sup>Optional</sup> <a name="Functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctions.property.functions"></a>

```go
Functions interface{}
```

- *Type:* interface{}

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#functions BedrockagentAgentActionGroup#functions}

---

### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

&bedrockagentagentactiongroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions {
	Name: *string,
	Description: *string,
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#name BedrockagentAgentActionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#name BedrockagentAgentActionGroup#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#parameters BedrockagentAgentActionGroup#parameters}

---

### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

&bedrockagentagentactiongroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters {
	MapBlockKey: *string,
	Type: *string,
	Description: *string,
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.mapBlockKey">MapBlockKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#map_block_key BedrockagentAgentActionGroup#map_block_key}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#type BedrockagentAgentActionGroup#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#required BedrockagentAgentActionGroup#required}. |

---

##### `MapBlockKey`<sup>Required</sup> <a name="MapBlockKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.mapBlockKey"></a>

```go
MapBlockKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#map_block_key BedrockagentAgentActionGroup#map_block_key}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#type BedrockagentAgentActionGroup#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#required BedrockagentAgentActionGroup#required}.

---

### BedrockagentAgentActionGroupTimeouts <a name="BedrockagentAgentActionGroupTimeouts" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

&bedrockagentagentactiongroup.BedrockagentAgentActionGroupTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#create BedrockagentAgentActionGroup#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/bedrockagent_agent_action_group#update BedrockagentAgentActionGroup#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentActionGroupActionGroupExecutorList <a name="BedrockagentAgentActionGroupActionGroupExecutorList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupActionGroupExecutorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentAgentActionGroupActionGroupExecutorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.get"></a>

```go
func Get(index *f64) BedrockagentAgentActionGroupActionGroupExecutorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupActionGroupExecutorOutputReference <a name="BedrockagentAgentActionGroupActionGroupExecutorOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupActionGroupExecutorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentAgentActionGroupActionGroupExecutorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetCustomControl">ResetCustomControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomControl` <a name="ResetCustomControl" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetCustomControl"></a>

```go
func ResetCustomControl()
```

##### `ResetLambda` <a name="ResetLambda" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.resetLambda"></a>

```go
func ResetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControlInput">CustomControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControl">CustomControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambda">Lambda</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomControlInput`<sup>Optional</sup> <a name="CustomControlInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControlInput"></a>

```go
func CustomControlInput() *string
```

- *Type:* *string

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambdaInput"></a>

```go
func LambdaInput() *string
```

- *Type:* *string

---

##### `CustomControl`<sup>Required</sup> <a name="CustomControl" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.customControl"></a>

```go
func CustomControl() *string
```

- *Type:* *string

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.lambda"></a>

```go
func Lambda() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupActionGroupExecutorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupApiSchemaList <a name="BedrockagentAgentActionGroupApiSchemaList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupApiSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentAgentActionGroupApiSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.get"></a>

```go
func Get(index *f64) BedrockagentAgentActionGroupApiSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupApiSchemaOutputReference <a name="BedrockagentAgentActionGroupApiSchemaOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupApiSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentAgentActionGroupApiSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.putS3"></a>

```go
func PutS3(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPayload` <a name="ResetPayload" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List">BedrockagentAgentActionGroupApiSchemaS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payloadInput">PayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payload">Payload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3"></a>

```go
func S3() BedrockagentAgentActionGroupApiSchemaS3List
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List">BedrockagentAgentActionGroupApiSchemaS3List</a>

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payloadInput"></a>

```go
func PayloadInput() *string
```

- *Type:* *string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.payload"></a>

```go
func Payload() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupApiSchemaS3List <a name="BedrockagentAgentActionGroupApiSchemaS3List" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupApiSchemaS3List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentAgentActionGroupApiSchemaS3List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.get"></a>

```go
func Get(index *f64) BedrockagentAgentActionGroupApiSchemaS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupApiSchemaS3OutputReference <a name="BedrockagentAgentActionGroupApiSchemaS3OutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupApiSchemaS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentAgentActionGroupApiSchemaS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3ObjectKey">ResetS3ObjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3BucketName"></a>

```go
func ResetS3BucketName()
```

##### `ResetS3ObjectKey` <a name="ResetS3ObjectKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.resetS3ObjectKey"></a>

```go
func ResetS3ObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKeyInput">S3ObjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKey">S3ObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `S3ObjectKeyInput`<sup>Optional</sup> <a name="S3ObjectKeyInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKeyInput"></a>

```go
func S3ObjectKeyInput() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3ObjectKey`<sup>Required</sup> <a name="S3ObjectKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.s3ObjectKey"></a>

```go
func S3ObjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupApiSchemaS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupFunctionSchemaList <a name="BedrockagentAgentActionGroupFunctionSchemaList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupFunctionSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentAgentActionGroupFunctionSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.get"></a>

```go
func Get(index *f64) BedrockagentAgentActionGroupFunctionSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.get"></a>

```go
func Get(index *f64) BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parameters"></a>

```go
func Parameters() BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.get"></a>

```go
func Get(index *f64) BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKeyInput">MapBlockKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKey">MapBlockKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MapBlockKeyInput`<sup>Optional</sup> <a name="MapBlockKeyInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKeyInput"></a>

```go
func MapBlockKeyInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MapBlockKey`<sup>Required</sup> <a name="MapBlockKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.mapBlockKey"></a>

```go
func MapBlockKey() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.get"></a>

```go
func Get(index *f64) BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.putFunctions">PutFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resetFunctions">ResetFunctions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunctions` <a name="PutFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.putFunctions"></a>

```go
func PutFunctions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.putFunctions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFunctions` <a name="ResetFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.resetFunctions"></a>

```go
func ResetFunctions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functions">Functions</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functionsInput">FunctionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functions"></a>

```go
func Functions() BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList</a>

---

##### `FunctionsInput`<sup>Optional</sup> <a name="FunctionsInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.functionsInput"></a>

```go
func FunctionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupFunctionSchemaOutputReference <a name="BedrockagentAgentActionGroupFunctionSchemaOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupFunctionSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentAgentActionGroupFunctionSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.putMemberFunctions">PutMemberFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resetMemberFunctions">ResetMemberFunctions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMemberFunctions` <a name="PutMemberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.putMemberFunctions"></a>

```go
func PutMemberFunctions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.putMemberFunctions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMemberFunctions` <a name="ResetMemberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.resetMemberFunctions"></a>

```go
func ResetMemberFunctions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctions">MemberFunctions</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctionsInput">MemberFunctionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemberFunctions`<sup>Required</sup> <a name="MemberFunctions" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctions"></a>

```go
func MemberFunctions() BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList">BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList</a>

---

##### `MemberFunctionsInput`<sup>Optional</sup> <a name="MemberFunctionsInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.memberFunctionsInput"></a>

```go
func MemberFunctionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupFunctionSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentAgentActionGroupTimeoutsOutputReference <a name="BedrockagentAgentActionGroupTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentagentactiongroup"

bedrockagentagentactiongroup.NewBedrockagentAgentActionGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentAgentActionGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgentActionGroup.BedrockagentAgentActionGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



