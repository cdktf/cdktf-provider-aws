# `lbListenerRule` Submodule <a name="`lbListenerRule` Submodule" id="@cdktf/provider-aws.lbListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerRule <a name="LbListenerRule" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule aws_lb_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRule(scope Construct, id *string, config LbListenerRuleConfig) LbListenerRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig">LbListenerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig">LbListenerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putAction"></a>

```go
func PutAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putCondition"></a>

```go
func PutCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbListenerRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.LbListenerRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.LbListenerRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.LbListenerRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.LbListenerRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LbListenerRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LbListenerRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LbListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LbListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList">LbListenerRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList">LbListenerRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.conditionInput">ConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArnInput">ListenerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArn">ListenerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.action"></a>

```go
func Action() LbListenerRuleActionList
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList">LbListenerRuleActionList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.condition"></a>

```go
func Condition() LbListenerRuleConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList">LbListenerRuleConditionList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.conditionInput"></a>

```go
func ConditionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListenerArnInput`<sup>Optional</sup> <a name="ListenerArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArnInput"></a>

```go
func ListenerArnInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArn"></a>

```go
func ListenerArn() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerRuleAction <a name="LbListenerRuleAction" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleAction {
	Type: *string,
	AuthenticateCognito: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleActionAuthenticateCognito,
	AuthenticateOidc: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleActionAuthenticateOidc,
	FixedResponse: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleActionFixedResponse,
	Forward: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleActionForward,
	Order: *f64,
	Redirect: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleActionRedirect,
	TargetGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#type LbListenerRule#type}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#order LbListenerRule#order}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#target_group_arn LbListenerRule#target_group_arn}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#type LbListenerRule#type}.

---

##### `AuthenticateCognito`<sup>Optional</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateCognito"></a>

```go
AuthenticateCognito LbListenerRuleActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#authenticate_cognito LbListenerRule#authenticate_cognito}

---

##### `AuthenticateOidc`<sup>Optional</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateOidc"></a>

```go
AuthenticateOidc LbListenerRuleActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#authenticate_oidc LbListenerRule#authenticate_oidc}

---

##### `FixedResponse`<sup>Optional</sup> <a name="FixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.fixedResponse"></a>

```go
FixedResponse LbListenerRuleActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#fixed_response LbListenerRule#fixed_response}

---

##### `Forward`<sup>Optional</sup> <a name="Forward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.forward"></a>

```go
Forward LbListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#forward LbListenerRule#forward}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#order LbListenerRule#order}.

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.redirect"></a>

```go
Redirect LbListenerRuleActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#redirect LbListenerRule#redirect}

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.targetGroupArn"></a>

```go
TargetGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#target_group_arn LbListenerRule#target_group_arn}.

---

### LbListenerRuleActionAuthenticateCognito <a name="LbListenerRuleActionAuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleActionAuthenticateCognito {
	UserPoolArn: *string,
	UserPoolClientId: *string,
	UserPoolDomain: *string,
	AuthenticationRequestExtraParams: *map[string]*string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#user_pool_arn LbListenerRule#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#user_pool_client_id LbListenerRule#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#user_pool_domain LbListenerRule#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#scope LbListenerRule#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#session_timeout LbListenerRule#session_timeout}. |

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolArn"></a>

```go
UserPoolArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#user_pool_arn LbListenerRule#user_pool_arn}.

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolClientId"></a>

```go
UserPoolClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#user_pool_client_id LbListenerRule#user_pool_client_id}.

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolDomain"></a>

```go
UserPoolDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#user_pool_domain LbListenerRule#user_pool_domain}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#scope LbListenerRule#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionTimeout"></a>

```go
SessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#session_timeout LbListenerRule#session_timeout}.

---

### LbListenerRuleActionAuthenticateOidc <a name="LbListenerRuleActionAuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleActionAuthenticateOidc {
	AuthorizationEndpoint: *string,
	ClientId: *string,
	ClientSecret: *string,
	Issuer: *string,
	TokenEndpoint: *string,
	UserInfoEndpoint: *string,
	AuthenticationRequestExtraParams: *map[string]*string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#authorization_endpoint LbListenerRule#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#client_id LbListenerRule#client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#client_secret LbListenerRule#client_secret}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#issuer LbListenerRule#issuer}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#token_endpoint LbListenerRule#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#user_info_endpoint LbListenerRule#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#scope LbListenerRule#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#session_timeout LbListenerRule#session_timeout}. |

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#authorization_endpoint LbListenerRule#authorization_endpoint}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#client_id LbListenerRule#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#client_secret LbListenerRule#client_secret}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#issuer LbListenerRule#issuer}.

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#token_endpoint LbListenerRule#token_endpoint}.

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint"></a>

```go
UserInfoEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#user_info_endpoint LbListenerRule#user_info_endpoint}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#scope LbListenerRule#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionTimeout"></a>

```go
SessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#session_timeout LbListenerRule#session_timeout}.

---

### LbListenerRuleActionFixedResponse <a name="LbListenerRuleActionFixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleActionFixedResponse {
	ContentType: *string,
	MessageBody: *string,
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#content_type LbListenerRule#content_type}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.messageBody">MessageBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#message_body LbListenerRule#message_body}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#status_code LbListenerRule#status_code}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#content_type LbListenerRule#content_type}.

---

##### `MessageBody`<sup>Optional</sup> <a name="MessageBody" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.messageBody"></a>

```go
MessageBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#message_body LbListenerRule#message_body}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#status_code LbListenerRule#status_code}.

---

### LbListenerRuleActionForward <a name="LbListenerRuleActionForward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleActionForward {
	TargetGroup: interface{},
	Stickiness: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleActionForwardStickiness,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.targetGroup">TargetGroup</a></code> | <code>interface{}</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a></code> | stickiness block. |

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.targetGroup"></a>

```go
TargetGroup interface{}
```

- *Type:* interface{}

target_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#target_group LbListenerRule#target_group}

---

##### `Stickiness`<sup>Optional</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.stickiness"></a>

```go
Stickiness LbListenerRuleActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#stickiness LbListenerRule#stickiness}

---

### LbListenerRuleActionForwardStickiness <a name="LbListenerRuleActionForwardStickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleActionForwardStickiness {
	Duration: *f64,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#duration LbListenerRule#duration}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#enabled LbListenerRule#enabled}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#duration LbListenerRule#duration}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#enabled LbListenerRule#enabled}.

---

### LbListenerRuleActionForwardTargetGroup <a name="LbListenerRuleActionForwardTargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleActionForwardTargetGroup {
	Arn: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#arn LbListenerRule#arn}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#weight LbListenerRule#weight}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#arn LbListenerRule#arn}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#weight LbListenerRule#weight}.

---

### LbListenerRuleActionRedirect <a name="LbListenerRuleActionRedirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleActionRedirect {
	StatusCode: *string,
	Host: *string,
	Path: *string,
	Port: *string,
	Protocol: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#status_code LbListenerRule#status_code}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#host LbListenerRule#host}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#path LbListenerRule#path}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#port LbListenerRule#port}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#protocol LbListenerRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#query LbListenerRule#query}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#status_code LbListenerRule#status_code}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#host LbListenerRule#host}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#path LbListenerRule#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#port LbListenerRule#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#protocol LbListenerRule#protocol}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#query LbListenerRule#query}.

---

### LbListenerRuleCondition <a name="LbListenerRuleCondition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleCondition {
	HostHeader: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleConditionHostHeader,
	HttpHeader: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleConditionHttpHeader,
	HttpRequestMethod: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleConditionHttpRequestMethod,
	PathPattern: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleConditionPathPattern,
	QueryString: interface{},
	SourceIp: github.com/cdktf/cdktf-provider-aws-go/aws/v21.lbListenerRule.LbListenerRuleConditionSourceIp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.hostHeader">HostHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a></code> | host_header block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpHeader">HttpHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a></code> | http_header block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpRequestMethod">HttpRequestMethod</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a></code> | http_request_method block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.pathPattern">PathPattern</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a></code> | path_pattern block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.queryString">QueryString</a></code> | <code>interface{}</code> | query_string block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.sourceIp">SourceIp</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a></code> | source_ip block. |

---

##### `HostHeader`<sup>Optional</sup> <a name="HostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.hostHeader"></a>

```go
HostHeader LbListenerRuleConditionHostHeader
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

host_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#host_header LbListenerRule#host_header}

---

##### `HttpHeader`<sup>Optional</sup> <a name="HttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpHeader"></a>

```go
HttpHeader LbListenerRuleConditionHttpHeader
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

http_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#http_header LbListenerRule#http_header}

---

##### `HttpRequestMethod`<sup>Optional</sup> <a name="HttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpRequestMethod"></a>

```go
HttpRequestMethod LbListenerRuleConditionHttpRequestMethod
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

http_request_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#http_request_method LbListenerRule#http_request_method}

---

##### `PathPattern`<sup>Optional</sup> <a name="PathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.pathPattern"></a>

```go
PathPattern LbListenerRuleConditionPathPattern
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

path_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#path_pattern LbListenerRule#path_pattern}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.queryString"></a>

```go
QueryString interface{}
```

- *Type:* interface{}

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#query_string LbListenerRule#query_string}

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.sourceIp"></a>

```go
SourceIp LbListenerRuleConditionSourceIp
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

source_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#source_ip LbListenerRule#source_ip}

---

### LbListenerRuleConditionHostHeader <a name="LbListenerRuleConditionHostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleConditionHostHeader {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionHttpHeader <a name="LbListenerRuleConditionHttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleConditionHttpHeader {
	HttpHeaderName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#http_header_name LbListenerRule#http_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}. |

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.httpHeaderName"></a>

```go
HttpHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#http_header_name LbListenerRule#http_header_name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionHttpRequestMethod <a name="LbListenerRuleConditionHttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleConditionHttpRequestMethod {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionPathPattern <a name="LbListenerRuleConditionPathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleConditionPathPattern {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionQueryString <a name="LbListenerRuleConditionQueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleConditionQueryString {
	Value: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#value LbListenerRule#value}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#key LbListenerRule#key}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#value LbListenerRule#value}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#key LbListenerRule#key}.

---

### LbListenerRuleConditionSourceIp <a name="LbListenerRuleConditionSourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleConditionSourceIp {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConfig <a name="LbListenerRuleConfig" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

&lblistenerrule.LbListenerRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: interface{},
	Condition: interface{},
	ListenerArn: *string,
	Id: *string,
	Priority: *f64,
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.action">Action</a></code> | <code>interface{}</code> | action block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.condition">Condition</a></code> | <code>interface{}</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.listenerArn">ListenerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#listener_arn LbListenerRule#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#id LbListenerRule#id}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#priority LbListenerRule#priority}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#tags LbListenerRule#tags}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#tags_all LbListenerRule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.action"></a>

```go
Action interface{}
```

- *Type:* interface{}

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#action LbListenerRule#action}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.condition"></a>

```go
Condition interface{}
```

- *Type:* interface{}

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#condition LbListenerRule#condition}

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.listenerArn"></a>

```go
ListenerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#listener_arn LbListenerRule#listener_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#id LbListenerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#priority LbListenerRule#priority}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#region LbListenerRule#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#tags LbListenerRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lb_listener_rule#tags_all LbListenerRule#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerRuleActionAuthenticateCognitoOutputReference <a name="LbListenerRuleActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionAuthenticateCognitoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleActionAuthenticateCognitoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput">UserPoolArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">UserPoolClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">UserPoolDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `UserPoolArnInput`<sup>Optional</sup> <a name="UserPoolArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```go
func UserPoolArnInput() *string
```

- *Type:* *string

---

##### `UserPoolClientIdInput`<sup>Optional</sup> <a name="UserPoolClientIdInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```go
func UserPoolClientIdInput() *string
```

- *Type:* *string

---

##### `UserPoolDomainInput`<sup>Optional</sup> <a name="UserPoolDomainInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```go
func UserPoolDomainInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```go
func UserPoolArn() *string
```

- *Type:* *string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```go
func UserPoolClientId() *string
```

- *Type:* *string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```go
func UserPoolDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

---


### LbListenerRuleActionAuthenticateOidcOutputReference <a name="LbListenerRuleActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionAuthenticateOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleActionAuthenticateOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```go
func UserInfoEndpointInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

---


### LbListenerRuleActionFixedResponseOutputReference <a name="LbListenerRuleActionFixedResponseOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionFixedResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleActionFixedResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetMessageBody">ResetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageBody` <a name="ResetMessageBody" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetMessageBody"></a>

```go
func ResetMessageBody()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput">MessageBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBody">MessageBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `MessageBodyInput`<sup>Optional</sup> <a name="MessageBodyInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput"></a>

```go
func MessageBodyInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBody"></a>

```go
func MessageBody() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

---


### LbListenerRuleActionForwardOutputReference <a name="LbListenerRuleActionForwardOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionForwardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleActionForwardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putStickiness">PutStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putTargetGroup">PutTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resetStickiness">ResetStickiness</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStickiness` <a name="PutStickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putStickiness"></a>

```go
func PutStickiness(value LbListenerRuleActionForwardStickiness)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

---

##### `PutTargetGroup` <a name="PutTargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putTargetGroup"></a>

```go
func PutTargetGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStickiness` <a name="ResetStickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resetStickiness"></a>

```go
func ResetStickiness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference">LbListenerRuleActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList">LbListenerRuleActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickinessInput">StickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroupInput">TargetGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Stickiness`<sup>Required</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickiness"></a>

```go
func Stickiness() LbListenerRuleActionForwardStickinessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference">LbListenerRuleActionForwardStickinessOutputReference</a>

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroup"></a>

```go
func TargetGroup() LbListenerRuleActionForwardTargetGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList">LbListenerRuleActionForwardTargetGroupList</a>

---

##### `StickinessInput`<sup>Optional</sup> <a name="StickinessInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickinessInput"></a>

```go
func StickinessInput() LbListenerRuleActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

---

##### `TargetGroupInput`<sup>Optional</sup> <a name="TargetGroupInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroupInput"></a>

```go
func TargetGroupInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

---


### LbListenerRuleActionForwardStickinessOutputReference <a name="LbListenerRuleActionForwardStickinessOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionForwardStickinessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleActionForwardStickinessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

---


### LbListenerRuleActionForwardTargetGroupList <a name="LbListenerRuleActionForwardTargetGroupList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionForwardTargetGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbListenerRuleActionForwardTargetGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.get"></a>

```go
func Get(index *f64) LbListenerRuleActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerRuleActionForwardTargetGroupOutputReference <a name="LbListenerRuleActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionForwardTargetGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbListenerRuleActionForwardTargetGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerRuleActionList <a name="LbListenerRuleActionList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbListenerRuleActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.get"></a>

```go
func Get(index *f64) LbListenerRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerRuleActionOutputReference <a name="LbListenerRuleActionOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbListenerRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateCognito">PutAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateOidc">PutAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putFixedResponse">PutFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putForward">PutForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateCognito">ResetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateOidc">ResetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetFixedResponse">ResetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetForward">ResetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticateCognito` <a name="PutAuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateCognito"></a>

```go
func PutAuthenticateCognito(value LbListenerRuleActionAuthenticateCognito)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

---

##### `PutAuthenticateOidc` <a name="PutAuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateOidc"></a>

```go
func PutAuthenticateOidc(value LbListenerRuleActionAuthenticateOidc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

---

##### `PutFixedResponse` <a name="PutFixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putFixedResponse"></a>

```go
func PutFixedResponse(value LbListenerRuleActionFixedResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

---

##### `PutForward` <a name="PutForward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putForward"></a>

```go
func PutForward(value LbListenerRuleActionForward)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putRedirect"></a>

```go
func PutRedirect(value LbListenerRuleActionRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

---

##### `ResetAuthenticateCognito` <a name="ResetAuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateCognito"></a>

```go
func ResetAuthenticateCognito()
```

##### `ResetAuthenticateOidc` <a name="ResetAuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateOidc"></a>

```go
func ResetAuthenticateOidc()
```

##### `ResetFixedResponse` <a name="ResetFixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetFixedResponse"></a>

```go
func ResetFixedResponse()
```

##### `ResetForward` <a name="ResetForward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetForward"></a>

```go
func ResetForward()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetRedirect"></a>

```go
func ResetRedirect()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetTargetGroupArn"></a>

```go
func ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference">LbListenerRuleActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference">LbListenerRuleActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference">LbListenerRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference">LbListenerRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference">LbListenerRuleActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognitoInput">AuthenticateCognitoInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidcInput">AuthenticateOidcInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponseInput">FixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forwardInput">ForwardInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticateCognito`<sup>Required</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognito"></a>

```go
func AuthenticateCognito() LbListenerRuleActionAuthenticateCognitoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference">LbListenerRuleActionAuthenticateCognitoOutputReference</a>

---

##### `AuthenticateOidc`<sup>Required</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidc"></a>

```go
func AuthenticateOidc() LbListenerRuleActionAuthenticateOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference">LbListenerRuleActionAuthenticateOidcOutputReference</a>

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponse"></a>

```go
func FixedResponse() LbListenerRuleActionFixedResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference">LbListenerRuleActionFixedResponseOutputReference</a>

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forward"></a>

```go
func Forward() LbListenerRuleActionForwardOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference">LbListenerRuleActionForwardOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirect"></a>

```go
func Redirect() LbListenerRuleActionRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference">LbListenerRuleActionRedirectOutputReference</a>

---

##### `AuthenticateCognitoInput`<sup>Optional</sup> <a name="AuthenticateCognitoInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognitoInput"></a>

```go
func AuthenticateCognitoInput() LbListenerRuleActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

---

##### `AuthenticateOidcInput`<sup>Optional</sup> <a name="AuthenticateOidcInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidcInput"></a>

```go
func AuthenticateOidcInput() LbListenerRuleActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

---

##### `FixedResponseInput`<sup>Optional</sup> <a name="FixedResponseInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponseInput"></a>

```go
func FixedResponseInput() LbListenerRuleActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forwardInput"></a>

```go
func ForwardInput() LbListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirectInput"></a>

```go
func RedirectInput() LbListenerRuleActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArnInput"></a>

```go
func TargetGroupArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerRuleActionRedirectOutputReference <a name="LbListenerRuleActionRedirectOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleActionRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleActionRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

---


### LbListenerRuleConditionHostHeaderOutputReference <a name="LbListenerRuleConditionHostHeaderOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleConditionHostHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleConditionHostHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleConditionHostHeader
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

---


### LbListenerRuleConditionHttpHeaderOutputReference <a name="LbListenerRuleConditionHttpHeaderOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleConditionHttpHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleConditionHttpHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput">HttpHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaderNameInput`<sup>Optional</sup> <a name="HttpHeaderNameInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput"></a>

```go
func HttpHeaderNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName"></a>

```go
func HttpHeaderName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleConditionHttpHeader
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

---


### LbListenerRuleConditionHttpRequestMethodOutputReference <a name="LbListenerRuleConditionHttpRequestMethodOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleConditionHttpRequestMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleConditionHttpRequestMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleConditionHttpRequestMethod
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

---


### LbListenerRuleConditionList <a name="LbListenerRuleConditionList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbListenerRuleConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.get"></a>

```go
func Get(index *f64) LbListenerRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerRuleConditionOutputReference <a name="LbListenerRuleConditionOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbListenerRuleConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHostHeader">PutHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpHeader">PutHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpRequestMethod">PutHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putPathPattern">PutPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putQueryString">PutQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putSourceIp">PutSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHostHeader">ResetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpHeader">ResetHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpRequestMethod">ResetHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetPathPattern">ResetPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostHeader` <a name="PutHostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHostHeader"></a>

```go
func PutHostHeader(value LbListenerRuleConditionHostHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHostHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

---

##### `PutHttpHeader` <a name="PutHttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpHeader"></a>

```go
func PutHttpHeader(value LbListenerRuleConditionHttpHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

---

##### `PutHttpRequestMethod` <a name="PutHttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpRequestMethod"></a>

```go
func PutHttpRequestMethod(value LbListenerRuleConditionHttpRequestMethod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpRequestMethod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

---

##### `PutPathPattern` <a name="PutPathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putPathPattern"></a>

```go
func PutPathPattern(value LbListenerRuleConditionPathPattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putPathPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

---

##### `PutQueryString` <a name="PutQueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putQueryString"></a>

```go
func PutQueryString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putQueryString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceIp` <a name="PutSourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putSourceIp"></a>

```go
func PutSourceIp(value LbListenerRuleConditionSourceIp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putSourceIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

---

##### `ResetHostHeader` <a name="ResetHostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHostHeader"></a>

```go
func ResetHostHeader()
```

##### `ResetHttpHeader` <a name="ResetHttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpHeader"></a>

```go
func ResetHttpHeader()
```

##### `ResetHttpRequestMethod` <a name="ResetHttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpRequestMethod"></a>

```go
func ResetHttpRequestMethod()
```

##### `ResetPathPattern` <a name="ResetPathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetPathPattern"></a>

```go
func ResetPathPattern()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetSourceIp"></a>

```go
func ResetSourceIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeader">HostHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference">LbListenerRuleConditionHostHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeader">HttpHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference">LbListenerRuleConditionHttpHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethod">HttpRequestMethod</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference">LbListenerRuleConditionHttpRequestMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPattern">PathPattern</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference">LbListenerRuleConditionPathPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList">LbListenerRuleConditionQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIp">SourceIp</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference">LbListenerRuleConditionSourceIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeaderInput">HostHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeaderInput">HttpHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethodInput">HttpRequestMethodInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPatternInput">PathPatternInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeader"></a>

```go
func HostHeader() LbListenerRuleConditionHostHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference">LbListenerRuleConditionHostHeaderOutputReference</a>

---

##### `HttpHeader`<sup>Required</sup> <a name="HttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeader"></a>

```go
func HttpHeader() LbListenerRuleConditionHttpHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference">LbListenerRuleConditionHttpHeaderOutputReference</a>

---

##### `HttpRequestMethod`<sup>Required</sup> <a name="HttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethod"></a>

```go
func HttpRequestMethod() LbListenerRuleConditionHttpRequestMethodOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference">LbListenerRuleConditionHttpRequestMethodOutputReference</a>

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPattern"></a>

```go
func PathPattern() LbListenerRuleConditionPathPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference">LbListenerRuleConditionPathPatternOutputReference</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryString"></a>

```go
func QueryString() LbListenerRuleConditionQueryStringList
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList">LbListenerRuleConditionQueryStringList</a>

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIp"></a>

```go
func SourceIp() LbListenerRuleConditionSourceIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference">LbListenerRuleConditionSourceIpOutputReference</a>

---

##### `HostHeaderInput`<sup>Optional</sup> <a name="HostHeaderInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeaderInput"></a>

```go
func HostHeaderInput() LbListenerRuleConditionHostHeader
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

---

##### `HttpHeaderInput`<sup>Optional</sup> <a name="HttpHeaderInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeaderInput"></a>

```go
func HttpHeaderInput() LbListenerRuleConditionHttpHeader
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

---

##### `HttpRequestMethodInput`<sup>Optional</sup> <a name="HttpRequestMethodInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethodInput"></a>

```go
func HttpRequestMethodInput() LbListenerRuleConditionHttpRequestMethod
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

---

##### `PathPatternInput`<sup>Optional</sup> <a name="PathPatternInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPatternInput"></a>

```go
func PathPatternInput() LbListenerRuleConditionPathPattern
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIpInput"></a>

```go
func SourceIpInput() LbListenerRuleConditionSourceIp
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerRuleConditionPathPatternOutputReference <a name="LbListenerRuleConditionPathPatternOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleConditionPathPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleConditionPathPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleConditionPathPattern
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

---


### LbListenerRuleConditionQueryStringList <a name="LbListenerRuleConditionQueryStringList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleConditionQueryStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbListenerRuleConditionQueryStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.get"></a>

```go
func Get(index *f64) LbListenerRuleConditionQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerRuleConditionQueryStringOutputReference <a name="LbListenerRuleConditionQueryStringOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleConditionQueryStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbListenerRuleConditionQueryStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resetKey"></a>

```go
func ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbListenerRuleConditionSourceIpOutputReference <a name="LbListenerRuleConditionSourceIpOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lblistenerrule"

lblistenerrule.NewLbListenerRuleConditionSourceIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerRuleConditionSourceIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerRuleConditionSourceIp
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

---



