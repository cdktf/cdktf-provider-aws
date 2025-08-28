# `bedrockagentKnowledgeBase` Submodule <a name="`bedrockagentKnowledgeBase` Submodule" id="@cdktf/provider-aws.bedrockagentKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentKnowledgeBase <a name="BedrockagentKnowledgeBase" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base aws_bedrockagent_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBase(scope Construct, id *string, config BedrockagentKnowledgeBaseConfig) BedrockagentKnowledgeBase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig">BedrockagentKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig">BedrockagentKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putKnowledgeBaseConfiguration">PutKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putStorageConfiguration">PutStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetKnowledgeBaseConfiguration">ResetKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetStorageConfiguration">ResetStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKnowledgeBaseConfiguration` <a name="PutKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putKnowledgeBaseConfiguration"></a>

```go
func PutKnowledgeBaseConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putKnowledgeBaseConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorageConfiguration` <a name="PutStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putStorageConfiguration"></a>

```go
func PutStorageConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putStorageConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putTimeouts"></a>

```go
func PutTimeouts(value BedrockagentKnowledgeBaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKnowledgeBaseConfiguration` <a name="ResetKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetKnowledgeBaseConfiguration"></a>

```go
func ResetKnowledgeBaseConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStorageConfiguration` <a name="ResetStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetStorageConfiguration"></a>

```go
func ResetStorageConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.BedrockagentKnowledgeBase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.BedrockagentKnowledgeBase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.BedrockagentKnowledgeBase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.BedrockagentKnowledgeBase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BedrockagentKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.failureReasons">FailureReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.knowledgeBaseConfiguration">KnowledgeBaseConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference">BedrockagentKnowledgeBaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.knowledgeBaseConfigurationInput">KnowledgeBaseConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.storageConfigurationInput">StorageConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FailureReasons`<sup>Required</sup> <a name="FailureReasons" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.failureReasons"></a>

```go
func FailureReasons() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KnowledgeBaseConfiguration`<sup>Required</sup> <a name="KnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.knowledgeBaseConfiguration"></a>

```go
func KnowledgeBaseConfiguration() BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList</a>

---

##### `StorageConfiguration`<sup>Required</sup> <a name="StorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.storageConfiguration"></a>

```go
func StorageConfiguration() BedrockagentKnowledgeBaseStorageConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.timeouts"></a>

```go
func Timeouts() BedrockagentKnowledgeBaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference">BedrockagentKnowledgeBaseTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KnowledgeBaseConfigurationInput`<sup>Optional</sup> <a name="KnowledgeBaseConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.knowledgeBaseConfigurationInput"></a>

```go
func KnowledgeBaseConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StorageConfigurationInput`<sup>Optional</sup> <a name="StorageConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.storageConfigurationInput"></a>

```go
func StorageConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentKnowledgeBaseConfig <a name="BedrockagentKnowledgeBaseConfig" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RoleArn: *string,
	Description: *string,
	KnowledgeBaseConfiguration: interface{},
	Region: *string,
	StorageConfiguration: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#role_arn BedrockagentKnowledgeBase#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.knowledgeBaseConfiguration">KnowledgeBaseConfiguration</a></code> | <code>interface{}</code> | knowledge_base_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.storageConfiguration">StorageConfiguration</a></code> | <code>interface{}</code> | storage_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#tags BedrockagentKnowledgeBase#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#role_arn BedrockagentKnowledgeBase#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}.

---

##### `KnowledgeBaseConfiguration`<sup>Optional</sup> <a name="KnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.knowledgeBaseConfiguration"></a>

```go
KnowledgeBaseConfiguration interface{}
```

- *Type:* interface{}

knowledge_base_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#knowledge_base_configuration BedrockagentKnowledgeBase#knowledge_base_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#region BedrockagentKnowledgeBase#region}

---

##### `StorageConfiguration`<sup>Optional</sup> <a name="StorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.storageConfiguration"></a>

```go
StorageConfiguration interface{}
```

- *Type:* interface{}

storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#storage_configuration BedrockagentKnowledgeBase#storage_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#tags BedrockagentKnowledgeBase#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseConfig.property.timeouts"></a>

```go
Timeouts BedrockagentKnowledgeBaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts">BedrockagentKnowledgeBaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#timeouts BedrockagentKnowledgeBase#timeouts}

---

### BedrockagentKnowledgeBaseKnowledgeBaseConfiguration <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration {
	Type: *string,
	VectorKnowledgeBaseConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.property.vectorKnowledgeBaseConfiguration">VectorKnowledgeBaseConfiguration</a></code> | <code>interface{}</code> | vector_knowledge_base_configuration block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}.

---

##### `VectorKnowledgeBaseConfiguration`<sup>Optional</sup> <a name="VectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfiguration.property.vectorKnowledgeBaseConfiguration"></a>

```go
VectorKnowledgeBaseConfiguration interface{}
```

- *Type:* interface{}

vector_knowledge_base_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_knowledge_base_configuration BedrockagentKnowledgeBase#vector_knowledge_base_configuration}

---

### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration {
	EmbeddingModelArn: *string,
	EmbeddingModelConfiguration: interface{},
	SupplementalDataStorageConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.property.embeddingModelArn">EmbeddingModelArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#embedding_model_arn BedrockagentKnowledgeBase#embedding_model_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.property.embeddingModelConfiguration">EmbeddingModelConfiguration</a></code> | <code>interface{}</code> | embedding_model_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.property.supplementalDataStorageConfiguration">SupplementalDataStorageConfiguration</a></code> | <code>interface{}</code> | supplemental_data_storage_configuration block. |

---

##### `EmbeddingModelArn`<sup>Required</sup> <a name="EmbeddingModelArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.property.embeddingModelArn"></a>

```go
EmbeddingModelArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#embedding_model_arn BedrockagentKnowledgeBase#embedding_model_arn}.

---

##### `EmbeddingModelConfiguration`<sup>Optional</sup> <a name="EmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.property.embeddingModelConfiguration"></a>

```go
EmbeddingModelConfiguration interface{}
```

- *Type:* interface{}

embedding_model_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#embedding_model_configuration BedrockagentKnowledgeBase#embedding_model_configuration}

---

##### `SupplementalDataStorageConfiguration`<sup>Optional</sup> <a name="SupplementalDataStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration.property.supplementalDataStorageConfiguration"></a>

```go
SupplementalDataStorageConfiguration interface{}
```

- *Type:* interface{}

supplemental_data_storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#supplemental_data_storage_configuration BedrockagentKnowledgeBase#supplemental_data_storage_configuration}

---

### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration {
	BedrockEmbeddingModelConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration.property.bedrockEmbeddingModelConfiguration">BedrockEmbeddingModelConfiguration</a></code> | <code>interface{}</code> | bedrock_embedding_model_configuration block. |

---

##### `BedrockEmbeddingModelConfiguration`<sup>Optional</sup> <a name="BedrockEmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration.property.bedrockEmbeddingModelConfiguration"></a>

```go
BedrockEmbeddingModelConfiguration interface{}
```

- *Type:* interface{}

bedrock_embedding_model_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#bedrock_embedding_model_configuration BedrockagentKnowledgeBase#bedrock_embedding_model_configuration}

---

### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration {
	Dimensions: *f64,
	EmbeddingDataType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration.property.dimensions">Dimensions</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#dimensions BedrockagentKnowledgeBase#dimensions}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration.property.embeddingDataType">EmbeddingDataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#embedding_data_type BedrockagentKnowledgeBase#embedding_data_type}. |

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration.property.dimensions"></a>

```go
Dimensions *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#dimensions BedrockagentKnowledgeBase#dimensions}.

---

##### `EmbeddingDataType`<sup>Optional</sup> <a name="EmbeddingDataType" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration.property.embeddingDataType"></a>

```go
EmbeddingDataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#embedding_data_type BedrockagentKnowledgeBase#embedding_data_type}.

---

### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration {
	StorageLocation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration.property.storageLocation">StorageLocation</a></code> | <code>interface{}</code> | storage_location block. |

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration.property.storageLocation"></a>

```go
StorageLocation interface{}
```

- *Type:* interface{}

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#storage_location BedrockagentKnowledgeBase#storage_location}

---

### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation {
	Type: *string,
	S3Location: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation.property.s3Location">S3Location</a></code> | <code>interface{}</code> | s3_location block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}.

---

##### `S3Location`<sup>Optional</sup> <a name="S3Location" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation.property.s3Location"></a>

```go
S3Location interface{}
```

- *Type:* interface{}

s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#s3_location BedrockagentKnowledgeBase#s3_location}

---

### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#uri BedrockagentKnowledgeBase#uri}. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#uri BedrockagentKnowledgeBase#uri}.

---

### BedrockagentKnowledgeBaseStorageConfiguration <a name="BedrockagentKnowledgeBaseStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseStorageConfiguration {
	Type: *string,
	OpensearchServerlessConfiguration: interface{},
	PineconeConfiguration: interface{},
	RdsConfiguration: interface{},
	RedisEnterpriseCloudConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.opensearchServerlessConfiguration">OpensearchServerlessConfiguration</a></code> | <code>interface{}</code> | opensearch_serverless_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.pineconeConfiguration">PineconeConfiguration</a></code> | <code>interface{}</code> | pinecone_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.rdsConfiguration">RdsConfiguration</a></code> | <code>interface{}</code> | rds_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.redisEnterpriseCloudConfiguration">RedisEnterpriseCloudConfiguration</a></code> | <code>interface{}</code> | redis_enterprise_cloud_configuration block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}.

---

##### `OpensearchServerlessConfiguration`<sup>Optional</sup> <a name="OpensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.opensearchServerlessConfiguration"></a>

```go
OpensearchServerlessConfiguration interface{}
```

- *Type:* interface{}

opensearch_serverless_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#opensearch_serverless_configuration BedrockagentKnowledgeBase#opensearch_serverless_configuration}

---

##### `PineconeConfiguration`<sup>Optional</sup> <a name="PineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.pineconeConfiguration"></a>

```go
PineconeConfiguration interface{}
```

- *Type:* interface{}

pinecone_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#pinecone_configuration BedrockagentKnowledgeBase#pinecone_configuration}

---

##### `RdsConfiguration`<sup>Optional</sup> <a name="RdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.rdsConfiguration"></a>

```go
RdsConfiguration interface{}
```

- *Type:* interface{}

rds_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#rds_configuration BedrockagentKnowledgeBase#rds_configuration}

---

##### `RedisEnterpriseCloudConfiguration`<sup>Optional</sup> <a name="RedisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfiguration.property.redisEnterpriseCloudConfiguration"></a>

```go
RedisEnterpriseCloudConfiguration interface{}
```

- *Type:* interface{}

redis_enterprise_cloud_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#redis_enterprise_cloud_configuration BedrockagentKnowledgeBase#redis_enterprise_cloud_configuration}

---

### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration {
	CollectionArn: *string,
	VectorIndexName: *string,
	FieldMapping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.collectionArn">CollectionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#collection_arn BedrockagentKnowledgeBase#collection_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.vectorIndexName">VectorIndexName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.fieldMapping">FieldMapping</a></code> | <code>interface{}</code> | field_mapping block. |

---

##### `CollectionArn`<sup>Required</sup> <a name="CollectionArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.collectionArn"></a>

```go
CollectionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#collection_arn BedrockagentKnowledgeBase#collection_arn}.

---

##### `VectorIndexName`<sup>Required</sup> <a name="VectorIndexName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.vectorIndexName"></a>

```go
VectorIndexName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}.

---

##### `FieldMapping`<sup>Optional</sup> <a name="FieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration.property.fieldMapping"></a>

```go
FieldMapping interface{}
```

- *Type:* interface{}

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}

---

### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping {
	MetadataField: *string,
	TextField: *string,
	VectorField: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.metadataField">MetadataField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.textField">TextField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.vectorField">VectorField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}. |

---

##### `MetadataField`<sup>Optional</sup> <a name="MetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.metadataField"></a>

```go
MetadataField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}.

---

##### `TextField`<sup>Optional</sup> <a name="TextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.textField"></a>

```go
TextField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}.

---

##### `VectorField`<sup>Optional</sup> <a name="VectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping.property.vectorField"></a>

```go
VectorField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}.

---

### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration {
	ConnectionString: *string,
	CredentialsSecretArn: *string,
	FieldMapping: interface{},
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#connection_string BedrockagentKnowledgeBase#connection_string}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.credentialsSecretArn">CredentialsSecretArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.fieldMapping">FieldMapping</a></code> | <code>interface{}</code> | field_mapping block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#namespace BedrockagentKnowledgeBase#namespace}. |

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#connection_string BedrockagentKnowledgeBase#connection_string}.

---

##### `CredentialsSecretArn`<sup>Required</sup> <a name="CredentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.credentialsSecretArn"></a>

```go
CredentialsSecretArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}.

---

##### `FieldMapping`<sup>Optional</sup> <a name="FieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.fieldMapping"></a>

```go
FieldMapping interface{}
```

- *Type:* interface{}

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#namespace BedrockagentKnowledgeBase#namespace}.

---

### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping {
	MetadataField: *string,
	TextField: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.property.metadataField">MetadataField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.property.textField">TextField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}. |

---

##### `MetadataField`<sup>Optional</sup> <a name="MetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.property.metadataField"></a>

```go
MetadataField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}.

---

##### `TextField`<sup>Optional</sup> <a name="TextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping.property.textField"></a>

```go
TextField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}.

---

### BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration {
	CredentialsSecretArn: *string,
	DatabaseName: *string,
	ResourceArn: *string,
	TableName: *string,
	FieldMapping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.credentialsSecretArn">CredentialsSecretArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#database_name BedrockagentKnowledgeBase#database_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#resource_arn BedrockagentKnowledgeBase#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#table_name BedrockagentKnowledgeBase#table_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.fieldMapping">FieldMapping</a></code> | <code>interface{}</code> | field_mapping block. |

---

##### `CredentialsSecretArn`<sup>Required</sup> <a name="CredentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.credentialsSecretArn"></a>

```go
CredentialsSecretArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#database_name BedrockagentKnowledgeBase#database_name}.

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#resource_arn BedrockagentKnowledgeBase#resource_arn}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#table_name BedrockagentKnowledgeBase#table_name}.

---

##### `FieldMapping`<sup>Optional</sup> <a name="FieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration.property.fieldMapping"></a>

```go
FieldMapping interface{}
```

- *Type:* interface{}

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}

---

### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping {
	MetadataField: *string,
	PrimaryKeyField: *string,
	TextField: *string,
	VectorField: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.metadataField">MetadataField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.primaryKeyField">PrimaryKeyField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#primary_key_field BedrockagentKnowledgeBase#primary_key_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.textField">TextField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.vectorField">VectorField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}. |

---

##### `MetadataField`<sup>Required</sup> <a name="MetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.metadataField"></a>

```go
MetadataField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}.

---

##### `PrimaryKeyField`<sup>Required</sup> <a name="PrimaryKeyField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.primaryKeyField"></a>

```go
PrimaryKeyField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#primary_key_field BedrockagentKnowledgeBase#primary_key_field}.

---

##### `TextField`<sup>Required</sup> <a name="TextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.textField"></a>

```go
TextField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}.

---

##### `VectorField`<sup>Required</sup> <a name="VectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping.property.vectorField"></a>

```go
VectorField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}.

---

### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration {
	CredentialsSecretArn: *string,
	Endpoint: *string,
	VectorIndexName: *string,
	FieldMapping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.credentialsSecretArn">CredentialsSecretArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#endpoint BedrockagentKnowledgeBase#endpoint}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.vectorIndexName">VectorIndexName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.fieldMapping">FieldMapping</a></code> | <code>interface{}</code> | field_mapping block. |

---

##### `CredentialsSecretArn`<sup>Required</sup> <a name="CredentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.credentialsSecretArn"></a>

```go
CredentialsSecretArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}.

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#endpoint BedrockagentKnowledgeBase#endpoint}.

---

##### `VectorIndexName`<sup>Required</sup> <a name="VectorIndexName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.vectorIndexName"></a>

```go
VectorIndexName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}.

---

##### `FieldMapping`<sup>Optional</sup> <a name="FieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration.property.fieldMapping"></a>

```go
FieldMapping interface{}
```

- *Type:* interface{}

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}

---

### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping {
	MetadataField: *string,
	TextField: *string,
	VectorField: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.metadataField">MetadataField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.textField">TextField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.vectorField">VectorField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}. |

---

##### `MetadataField`<sup>Optional</sup> <a name="MetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.metadataField"></a>

```go
MetadataField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}.

---

##### `TextField`<sup>Optional</sup> <a name="TextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.textField"></a>

```go
TextField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}.

---

##### `VectorField`<sup>Optional</sup> <a name="VectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping.property.vectorField"></a>

```go
VectorField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}.

---

### BedrockagentKnowledgeBaseTimeouts <a name="BedrockagentKnowledgeBaseTimeouts" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

&bedrockagentknowledgebase.BedrockagentKnowledgeBaseTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#create BedrockagentKnowledgeBase#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#delete BedrockagentKnowledgeBase#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/bedrockagent_knowledge_base#update BedrockagentKnowledgeBase#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putVectorKnowledgeBaseConfiguration">PutVectorKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetVectorKnowledgeBaseConfiguration">ResetVectorKnowledgeBaseConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVectorKnowledgeBaseConfiguration` <a name="PutVectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putVectorKnowledgeBaseConfiguration"></a>

```go
func PutVectorKnowledgeBaseConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putVectorKnowledgeBaseConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetVectorKnowledgeBaseConfiguration` <a name="ResetVectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetVectorKnowledgeBaseConfiguration"></a>

```go
func ResetVectorKnowledgeBaseConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.vectorKnowledgeBaseConfiguration">VectorKnowledgeBaseConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.vectorKnowledgeBaseConfigurationInput">VectorKnowledgeBaseConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VectorKnowledgeBaseConfiguration`<sup>Required</sup> <a name="VectorKnowledgeBaseConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.vectorKnowledgeBaseConfiguration"></a>

```go
func VectorKnowledgeBaseConfiguration() BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VectorKnowledgeBaseConfigurationInput`<sup>Optional</sup> <a name="VectorKnowledgeBaseConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.vectorKnowledgeBaseConfigurationInput"></a>

```go
func VectorKnowledgeBaseConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.resetEmbeddingDataType">ResetEmbeddingDataType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetEmbeddingDataType` <a name="ResetEmbeddingDataType" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.resetEmbeddingDataType"></a>

```go
func ResetEmbeddingDataType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.embeddingDataTypeInput">EmbeddingDataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.dimensions">Dimensions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.embeddingDataType">EmbeddingDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() *f64
```

- *Type:* *f64

---

##### `EmbeddingDataTypeInput`<sup>Optional</sup> <a name="EmbeddingDataTypeInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.embeddingDataTypeInput"></a>

```go
func EmbeddingDataTypeInput() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.dimensions"></a>

```go
func Dimensions() *f64
```

- *Type:* *f64

---

##### `EmbeddingDataType`<sup>Required</sup> <a name="EmbeddingDataType" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.embeddingDataType"></a>

```go
func EmbeddingDataType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.putBedrockEmbeddingModelConfiguration">PutBedrockEmbeddingModelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.resetBedrockEmbeddingModelConfiguration">ResetBedrockEmbeddingModelConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBedrockEmbeddingModelConfiguration` <a name="PutBedrockEmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.putBedrockEmbeddingModelConfiguration"></a>

```go
func PutBedrockEmbeddingModelConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.putBedrockEmbeddingModelConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBedrockEmbeddingModelConfiguration` <a name="ResetBedrockEmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.resetBedrockEmbeddingModelConfiguration"></a>

```go
func ResetBedrockEmbeddingModelConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.bedrockEmbeddingModelConfiguration">BedrockEmbeddingModelConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.bedrockEmbeddingModelConfigurationInput">BedrockEmbeddingModelConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BedrockEmbeddingModelConfiguration`<sup>Required</sup> <a name="BedrockEmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.bedrockEmbeddingModelConfiguration"></a>

```go
func BedrockEmbeddingModelConfiguration() BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList</a>

---

##### `BedrockEmbeddingModelConfigurationInput`<sup>Optional</sup> <a name="BedrockEmbeddingModelConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.bedrockEmbeddingModelConfigurationInput"></a>

```go
func BedrockEmbeddingModelConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.putEmbeddingModelConfiguration">PutEmbeddingModelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.putSupplementalDataStorageConfiguration">PutSupplementalDataStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resetEmbeddingModelConfiguration">ResetEmbeddingModelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resetSupplementalDataStorageConfiguration">ResetSupplementalDataStorageConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingModelConfiguration` <a name="PutEmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.putEmbeddingModelConfiguration"></a>

```go
func PutEmbeddingModelConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.putEmbeddingModelConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSupplementalDataStorageConfiguration` <a name="PutSupplementalDataStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.putSupplementalDataStorageConfiguration"></a>

```go
func PutSupplementalDataStorageConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.putSupplementalDataStorageConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEmbeddingModelConfiguration` <a name="ResetEmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resetEmbeddingModelConfiguration"></a>

```go
func ResetEmbeddingModelConfiguration()
```

##### `ResetSupplementalDataStorageConfiguration` <a name="ResetSupplementalDataStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.resetSupplementalDataStorageConfiguration"></a>

```go
func ResetSupplementalDataStorageConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelConfiguration">EmbeddingModelConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.supplementalDataStorageConfiguration">SupplementalDataStorageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelArnInput">EmbeddingModelArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelConfigurationInput">EmbeddingModelConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.supplementalDataStorageConfigurationInput">SupplementalDataStorageConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelArn">EmbeddingModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmbeddingModelConfiguration`<sup>Required</sup> <a name="EmbeddingModelConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelConfiguration"></a>

```go
func EmbeddingModelConfiguration() BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList</a>

---

##### `SupplementalDataStorageConfiguration`<sup>Required</sup> <a name="SupplementalDataStorageConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.supplementalDataStorageConfiguration"></a>

```go
func SupplementalDataStorageConfiguration() BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList</a>

---

##### `EmbeddingModelArnInput`<sup>Optional</sup> <a name="EmbeddingModelArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelArnInput"></a>

```go
func EmbeddingModelArnInput() *string
```

- *Type:* *string

---

##### `EmbeddingModelConfigurationInput`<sup>Optional</sup> <a name="EmbeddingModelConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelConfigurationInput"></a>

```go
func EmbeddingModelConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SupplementalDataStorageConfigurationInput`<sup>Optional</sup> <a name="SupplementalDataStorageConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.supplementalDataStorageConfigurationInput"></a>

```go
func SupplementalDataStorageConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EmbeddingModelArn`<sup>Required</sup> <a name="EmbeddingModelArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.embeddingModelArn"></a>

```go
func EmbeddingModelArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.putStorageLocation">PutStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageLocation` <a name="PutStorageLocation" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.putStorageLocation"></a>

```go
func PutStorageLocation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.putStorageLocation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.resetStorageLocation"></a>

```go
func ResetStorageLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.storageLocation">StorageLocation</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.storageLocation"></a>

```go
func StorageLocation() BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList</a>

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.storageLocationInput"></a>

```go
func StorageLocationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.resetS3Location">ResetS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Location` <a name="PutS3Location" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.putS3Location"></a>

```go
func PutS3Location(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.putS3Location.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetS3Location` <a name="ResetS3Location" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.resetS3Location"></a>

```go
func ResetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.s3Location"></a>

```go
func S3Location() BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList">BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList</a>

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.s3LocationInput"></a>

```go
func S3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference <a name="BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseStorageConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseStorageConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetMetadataField">ResetMetadataField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetTextField">ResetTextField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetVectorField">ResetVectorField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadataField` <a name="ResetMetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetMetadataField"></a>

```go
func ResetMetadataField()
```

##### `ResetTextField` <a name="ResetTextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetTextField"></a>

```go
func ResetTextField()
```

##### `ResetVectorField` <a name="ResetVectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.resetVectorField"></a>

```go
func ResetVectorField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.metadataFieldInput">MetadataFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.textFieldInput">TextFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.vectorFieldInput">VectorFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.metadataField">MetadataField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.textField">TextField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.vectorField">VectorField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataFieldInput`<sup>Optional</sup> <a name="MetadataFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.metadataFieldInput"></a>

```go
func MetadataFieldInput() *string
```

- *Type:* *string

---

##### `TextFieldInput`<sup>Optional</sup> <a name="TextFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.textFieldInput"></a>

```go
func TextFieldInput() *string
```

- *Type:* *string

---

##### `VectorFieldInput`<sup>Optional</sup> <a name="VectorFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.vectorFieldInput"></a>

```go
func VectorFieldInput() *string
```

- *Type:* *string

---

##### `MetadataField`<sup>Required</sup> <a name="MetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.metadataField"></a>

```go
func MetadataField() *string
```

- *Type:* *string

---

##### `TextField`<sup>Required</sup> <a name="TextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.textField"></a>

```go
func TextField() *string
```

- *Type:* *string

---

##### `VectorField`<sup>Required</sup> <a name="VectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.vectorField"></a>

```go
func VectorField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.putFieldMapping">PutFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resetFieldMapping">ResetFieldMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldMapping` <a name="PutFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.putFieldMapping"></a>

```go
func PutFieldMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFieldMapping` <a name="ResetFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.resetFieldMapping"></a>

```go
func ResetFieldMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fieldMapping">FieldMapping</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.collectionArnInput">CollectionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fieldMappingInput">FieldMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.vectorIndexNameInput">VectorIndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.collectionArn">CollectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.vectorIndexName">VectorIndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldMapping`<sup>Required</sup> <a name="FieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fieldMapping"></a>

```go
func FieldMapping() BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList</a>

---

##### `CollectionArnInput`<sup>Optional</sup> <a name="CollectionArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.collectionArnInput"></a>

```go
func CollectionArnInput() *string
```

- *Type:* *string

---

##### `FieldMappingInput`<sup>Optional</sup> <a name="FieldMappingInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.fieldMappingInput"></a>

```go
func FieldMappingInput() interface{}
```

- *Type:* interface{}

---

##### `VectorIndexNameInput`<sup>Optional</sup> <a name="VectorIndexNameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.vectorIndexNameInput"></a>

```go
func VectorIndexNameInput() *string
```

- *Type:* *string

---

##### `CollectionArn`<sup>Required</sup> <a name="CollectionArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.collectionArn"></a>

```go
func CollectionArn() *string
```

- *Type:* *string

---

##### `VectorIndexName`<sup>Required</sup> <a name="VectorIndexName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.vectorIndexName"></a>

```go
func VectorIndexName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseStorageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putOpensearchServerlessConfiguration">PutOpensearchServerlessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putPineconeConfiguration">PutPineconeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRdsConfiguration">PutRdsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRedisEnterpriseCloudConfiguration">PutRedisEnterpriseCloudConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetOpensearchServerlessConfiguration">ResetOpensearchServerlessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetPineconeConfiguration">ResetPineconeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetRdsConfiguration">ResetRdsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetRedisEnterpriseCloudConfiguration">ResetRedisEnterpriseCloudConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOpensearchServerlessConfiguration` <a name="PutOpensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putOpensearchServerlessConfiguration"></a>

```go
func PutOpensearchServerlessConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putOpensearchServerlessConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPineconeConfiguration` <a name="PutPineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putPineconeConfiguration"></a>

```go
func PutPineconeConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putPineconeConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRdsConfiguration` <a name="PutRdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRdsConfiguration"></a>

```go
func PutRdsConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRdsConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedisEnterpriseCloudConfiguration` <a name="PutRedisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRedisEnterpriseCloudConfiguration"></a>

```go
func PutRedisEnterpriseCloudConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.putRedisEnterpriseCloudConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOpensearchServerlessConfiguration` <a name="ResetOpensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetOpensearchServerlessConfiguration"></a>

```go
func ResetOpensearchServerlessConfiguration()
```

##### `ResetPineconeConfiguration` <a name="ResetPineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetPineconeConfiguration"></a>

```go
func ResetPineconeConfiguration()
```

##### `ResetRdsConfiguration` <a name="ResetRdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetRdsConfiguration"></a>

```go
func ResetRdsConfiguration()
```

##### `ResetRedisEnterpriseCloudConfiguration` <a name="ResetRedisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.resetRedisEnterpriseCloudConfiguration"></a>

```go
func ResetRedisEnterpriseCloudConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.opensearchServerlessConfiguration">OpensearchServerlessConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.pineconeConfiguration">PineconeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.rdsConfiguration">RdsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.redisEnterpriseCloudConfiguration">RedisEnterpriseCloudConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.opensearchServerlessConfigurationInput">OpensearchServerlessConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.pineconeConfigurationInput">PineconeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.rdsConfigurationInput">RdsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.redisEnterpriseCloudConfigurationInput">RedisEnterpriseCloudConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OpensearchServerlessConfiguration`<sup>Required</sup> <a name="OpensearchServerlessConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.opensearchServerlessConfiguration"></a>

```go
func OpensearchServerlessConfiguration() BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList</a>

---

##### `PineconeConfiguration`<sup>Required</sup> <a name="PineconeConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.pineconeConfiguration"></a>

```go
func PineconeConfiguration() BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList</a>

---

##### `RdsConfiguration`<sup>Required</sup> <a name="RdsConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.rdsConfiguration"></a>

```go
func RdsConfiguration() BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList</a>

---

##### `RedisEnterpriseCloudConfiguration`<sup>Required</sup> <a name="RedisEnterpriseCloudConfiguration" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.redisEnterpriseCloudConfiguration"></a>

```go
func RedisEnterpriseCloudConfiguration() BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList</a>

---

##### `OpensearchServerlessConfigurationInput`<sup>Optional</sup> <a name="OpensearchServerlessConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.opensearchServerlessConfigurationInput"></a>

```go
func OpensearchServerlessConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PineconeConfigurationInput`<sup>Optional</sup> <a name="PineconeConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.pineconeConfigurationInput"></a>

```go
func PineconeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RdsConfigurationInput`<sup>Optional</sup> <a name="RdsConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.rdsConfigurationInput"></a>

```go
func RdsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RedisEnterpriseCloudConfigurationInput`<sup>Optional</sup> <a name="RedisEnterpriseCloudConfigurationInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.redisEnterpriseCloudConfigurationInput"></a>

```go
func RedisEnterpriseCloudConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resetMetadataField">ResetMetadataField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resetTextField">ResetTextField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadataField` <a name="ResetMetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resetMetadataField"></a>

```go
func ResetMetadataField()
```

##### `ResetTextField` <a name="ResetTextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.resetTextField"></a>

```go
func ResetTextField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.metadataFieldInput">MetadataFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.textFieldInput">TextFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.metadataField">MetadataField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.textField">TextField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataFieldInput`<sup>Optional</sup> <a name="MetadataFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.metadataFieldInput"></a>

```go
func MetadataFieldInput() *string
```

- *Type:* *string

---

##### `TextFieldInput`<sup>Optional</sup> <a name="TextFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.textFieldInput"></a>

```go
func TextFieldInput() *string
```

- *Type:* *string

---

##### `MetadataField`<sup>Required</sup> <a name="MetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.metadataField"></a>

```go
func MetadataField() *string
```

- *Type:* *string

---

##### `TextField`<sup>Required</sup> <a name="TextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.textField"></a>

```go
func TextField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.putFieldMapping">PutFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resetFieldMapping">ResetFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldMapping` <a name="PutFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.putFieldMapping"></a>

```go
func PutFieldMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFieldMapping` <a name="ResetFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resetFieldMapping"></a>

```go
func ResetFieldMapping()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fieldMapping">FieldMapping</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.credentialsSecretArnInput">CredentialsSecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fieldMappingInput">FieldMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.credentialsSecretArn">CredentialsSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldMapping`<sup>Required</sup> <a name="FieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fieldMapping"></a>

```go
func FieldMapping() BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList</a>

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `CredentialsSecretArnInput`<sup>Optional</sup> <a name="CredentialsSecretArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.credentialsSecretArnInput"></a>

```go
func CredentialsSecretArnInput() *string
```

- *Type:* *string

---

##### `FieldMappingInput`<sup>Optional</sup> <a name="FieldMappingInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.fieldMappingInput"></a>

```go
func FieldMappingInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `CredentialsSecretArn`<sup>Required</sup> <a name="CredentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.credentialsSecretArn"></a>

```go
func CredentialsSecretArn() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.metadataFieldInput">MetadataFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.primaryKeyFieldInput">PrimaryKeyFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.textFieldInput">TextFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.vectorFieldInput">VectorFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.metadataField">MetadataField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.primaryKeyField">PrimaryKeyField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.textField">TextField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.vectorField">VectorField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataFieldInput`<sup>Optional</sup> <a name="MetadataFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.metadataFieldInput"></a>

```go
func MetadataFieldInput() *string
```

- *Type:* *string

---

##### `PrimaryKeyFieldInput`<sup>Optional</sup> <a name="PrimaryKeyFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.primaryKeyFieldInput"></a>

```go
func PrimaryKeyFieldInput() *string
```

- *Type:* *string

---

##### `TextFieldInput`<sup>Optional</sup> <a name="TextFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.textFieldInput"></a>

```go
func TextFieldInput() *string
```

- *Type:* *string

---

##### `VectorFieldInput`<sup>Optional</sup> <a name="VectorFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.vectorFieldInput"></a>

```go
func VectorFieldInput() *string
```

- *Type:* *string

---

##### `MetadataField`<sup>Required</sup> <a name="MetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.metadataField"></a>

```go
func MetadataField() *string
```

- *Type:* *string

---

##### `PrimaryKeyField`<sup>Required</sup> <a name="PrimaryKeyField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.primaryKeyField"></a>

```go
func PrimaryKeyField() *string
```

- *Type:* *string

---

##### `TextField`<sup>Required</sup> <a name="TextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.textField"></a>

```go
func TextField() *string
```

- *Type:* *string

---

##### `VectorField`<sup>Required</sup> <a name="VectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.vectorField"></a>

```go
func VectorField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.putFieldMapping">PutFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resetFieldMapping">ResetFieldMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldMapping` <a name="PutFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.putFieldMapping"></a>

```go
func PutFieldMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFieldMapping` <a name="ResetFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.resetFieldMapping"></a>

```go
func ResetFieldMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fieldMapping">FieldMapping</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.credentialsSecretArnInput">CredentialsSecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fieldMappingInput">FieldMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.credentialsSecretArn">CredentialsSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldMapping`<sup>Required</sup> <a name="FieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fieldMapping"></a>

```go
func FieldMapping() BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList</a>

---

##### `CredentialsSecretArnInput`<sup>Optional</sup> <a name="CredentialsSecretArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.credentialsSecretArnInput"></a>

```go
func CredentialsSecretArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `FieldMappingInput`<sup>Optional</sup> <a name="FieldMappingInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.fieldMappingInput"></a>

```go
func FieldMappingInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CredentialsSecretArn`<sup>Required</sup> <a name="CredentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.credentialsSecretArn"></a>

```go
func CredentialsSecretArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetMetadataField">ResetMetadataField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetTextField">ResetTextField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetVectorField">ResetVectorField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadataField` <a name="ResetMetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetMetadataField"></a>

```go
func ResetMetadataField()
```

##### `ResetTextField` <a name="ResetTextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetTextField"></a>

```go
func ResetTextField()
```

##### `ResetVectorField` <a name="ResetVectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.resetVectorField"></a>

```go
func ResetVectorField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.metadataFieldInput">MetadataFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.textFieldInput">TextFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.vectorFieldInput">VectorFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.metadataField">MetadataField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.textField">TextField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.vectorField">VectorField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataFieldInput`<sup>Optional</sup> <a name="MetadataFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.metadataFieldInput"></a>

```go
func MetadataFieldInput() *string
```

- *Type:* *string

---

##### `TextFieldInput`<sup>Optional</sup> <a name="TextFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.textFieldInput"></a>

```go
func TextFieldInput() *string
```

- *Type:* *string

---

##### `VectorFieldInput`<sup>Optional</sup> <a name="VectorFieldInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.vectorFieldInput"></a>

```go
func VectorFieldInput() *string
```

- *Type:* *string

---

##### `MetadataField`<sup>Required</sup> <a name="MetadataField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.metadataField"></a>

```go
func MetadataField() *string
```

- *Type:* *string

---

##### `TextField`<sup>Required</sup> <a name="TextField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.textField"></a>

```go
func TextField() *string
```

- *Type:* *string

---

##### `VectorField`<sup>Required</sup> <a name="VectorField" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.vectorField"></a>

```go
func VectorField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference <a name="BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.putFieldMapping">PutFieldMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resetFieldMapping">ResetFieldMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldMapping` <a name="PutFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.putFieldMapping"></a>

```go
func PutFieldMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFieldMapping` <a name="ResetFieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.resetFieldMapping"></a>

```go
func ResetFieldMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fieldMapping">FieldMapping</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.credentialsSecretArnInput">CredentialsSecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fieldMappingInput">FieldMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.vectorIndexNameInput">VectorIndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.credentialsSecretArn">CredentialsSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.vectorIndexName">VectorIndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldMapping`<sup>Required</sup> <a name="FieldMapping" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fieldMapping"></a>

```go
func FieldMapping() BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList">BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList</a>

---

##### `CredentialsSecretArnInput`<sup>Optional</sup> <a name="CredentialsSecretArnInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.credentialsSecretArnInput"></a>

```go
func CredentialsSecretArnInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `FieldMappingInput`<sup>Optional</sup> <a name="FieldMappingInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.fieldMappingInput"></a>

```go
func FieldMappingInput() interface{}
```

- *Type:* interface{}

---

##### `VectorIndexNameInput`<sup>Optional</sup> <a name="VectorIndexNameInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.vectorIndexNameInput"></a>

```go
func VectorIndexNameInput() *string
```

- *Type:* *string

---

##### `CredentialsSecretArn`<sup>Required</sup> <a name="CredentialsSecretArn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.credentialsSecretArn"></a>

```go
func CredentialsSecretArn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `VectorIndexName`<sup>Required</sup> <a name="VectorIndexName" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.vectorIndexName"></a>

```go
func VectorIndexName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentKnowledgeBaseTimeoutsOutputReference <a name="BedrockagentKnowledgeBaseTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentknowledgebase"

bedrockagentknowledgebase.NewBedrockagentKnowledgeBaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentKnowledgeBaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentKnowledgeBase.BedrockagentKnowledgeBaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



