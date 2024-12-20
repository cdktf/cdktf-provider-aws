# `vpclatticeListenerRule` Submodule <a name="`vpclatticeListenerRule` Submodule" id="@cdktf/provider-aws.vpclatticeListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeListenerRule <a name="VpclatticeListenerRule" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule aws_vpclattice_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRule(scope Construct, id *string, config VpclatticeListenerRuleConfig) VpclatticeListenerRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig">VpclatticeListenerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig">VpclatticeListenerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putAction"></a>

```go
func PutAction(value VpclatticeListenerRuleAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putMatch"></a>

```go
func PutMatch(value VpclatticeListenerRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putTimeouts"></a>

```go
func PutTimeouts(value VpclatticeListenerRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeListenerRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.VpclatticeListenerRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.VpclatticeListenerRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.VpclatticeListenerRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.VpclatticeListenerRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpclatticeListenerRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpclatticeListenerRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpclatticeListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference">VpclatticeListenerRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference">VpclatticeListenerRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference">VpclatticeListenerRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.listenerIdentifierInput">ListenerIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.serviceIdentifierInput">ServiceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.listenerIdentifier">ListenerIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.action"></a>

```go
func Action() VpclatticeListenerRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference">VpclatticeListenerRuleActionOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.match"></a>

```go
func Match() VpclatticeListenerRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference">VpclatticeListenerRuleMatchOutputReference</a>

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.timeouts"></a>

```go
func Timeouts() VpclatticeListenerRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference">VpclatticeListenerRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.actionInput"></a>

```go
func ActionInput() VpclatticeListenerRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListenerIdentifierInput`<sup>Optional</sup> <a name="ListenerIdentifierInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.listenerIdentifierInput"></a>

```go
func ListenerIdentifierInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.matchInput"></a>

```go
func MatchInput() VpclatticeListenerRuleMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ServiceIdentifierInput`<sup>Optional</sup> <a name="ServiceIdentifierInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.serviceIdentifierInput"></a>

```go
func ServiceIdentifierInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListenerIdentifier`<sup>Required</sup> <a name="ListenerIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.listenerIdentifier"></a>

```go
func ListenerIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.serviceIdentifier"></a>

```go
func ServiceIdentifier() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeListenerRuleAction <a name="VpclatticeListenerRuleAction" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleAction {
	FixedResponse: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse,
	Forward: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeListenerRule.VpclatticeListenerRuleActionForward,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a></code> | forward block. |

---

##### `FixedResponse`<sup>Optional</sup> <a name="FixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.property.fixedResponse"></a>

```go
FixedResponse VpclatticeListenerRuleActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#fixed_response VpclatticeListenerRule#fixed_response}

---

##### `Forward`<sup>Optional</sup> <a name="Forward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction.property.forward"></a>

```go
Forward VpclatticeListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#forward VpclatticeListenerRule#forward}

---

### VpclatticeListenerRuleActionFixedResponse <a name="VpclatticeListenerRuleActionFixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleActionFixedResponse {
	StatusCode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse.property.statusCode">StatusCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#status_code VpclatticeListenerRule#status_code}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#status_code VpclatticeListenerRule#status_code}.

---

### VpclatticeListenerRuleActionForward <a name="VpclatticeListenerRuleActionForward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleActionForward {
	TargetGroups: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward.property.targetGroups">TargetGroups</a></code> | <code>interface{}</code> | target_groups block. |

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward.property.targetGroups"></a>

```go
TargetGroups interface{}
```

- *Type:* interface{}

target_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#target_groups VpclatticeListenerRule#target_groups}

---

### VpclatticeListenerRuleActionForwardTargetGroups <a name="VpclatticeListenerRuleActionForwardTargetGroups" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleActionForwardTargetGroups {
	TargetGroupIdentifier: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.property.targetGroupIdentifier">TargetGroupIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#target_group_identifier VpclatticeListenerRule#target_group_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#weight VpclatticeListenerRule#weight}. |

---

##### `TargetGroupIdentifier`<sup>Required</sup> <a name="TargetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.property.targetGroupIdentifier"></a>

```go
TargetGroupIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#target_group_identifier VpclatticeListenerRule#target_group_identifier}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroups.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#weight VpclatticeListenerRule#weight}.

---

### VpclatticeListenerRuleConfig <a name="VpclatticeListenerRuleConfig" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeListenerRule.VpclatticeListenerRuleAction,
	ListenerIdentifier: *string,
	Match: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeListenerRule.VpclatticeListenerRuleMatch,
	Name: *string,
	Priority: *f64,
	ServiceIdentifier: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.listenerIdentifier">ListenerIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#listener_identifier VpclatticeListenerRule#listener_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#priority VpclatticeListenerRule#priority}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#service_identifier VpclatticeListenerRule#service_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#id VpclatticeListenerRule#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#tags VpclatticeListenerRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#tags_all VpclatticeListenerRule#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.action"></a>

```go
Action VpclatticeListenerRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#action VpclatticeListenerRule#action}

---

##### `ListenerIdentifier`<sup>Required</sup> <a name="ListenerIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.listenerIdentifier"></a>

```go
ListenerIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#listener_identifier VpclatticeListenerRule#listener_identifier}.

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.match"></a>

```go
Match VpclatticeListenerRuleMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#match VpclatticeListenerRule#match}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#priority VpclatticeListenerRule#priority}.

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.serviceIdentifier"></a>

```go
ServiceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#service_identifier VpclatticeListenerRule#service_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#id VpclatticeListenerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#tags VpclatticeListenerRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#tags_all VpclatticeListenerRule#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleConfig.property.timeouts"></a>

```go
Timeouts VpclatticeListenerRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts">VpclatticeListenerRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#timeouts VpclatticeListenerRule#timeouts}

---

### VpclatticeListenerRuleMatch <a name="VpclatticeListenerRuleMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleMatch {
	HttpMatch: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch.property.httpMatch">HttpMatch</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a></code> | http_match block. |

---

##### `HttpMatch`<sup>Optional</sup> <a name="HttpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch.property.httpMatch"></a>

```go
HttpMatch VpclatticeListenerRuleMatchHttpMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a>

http_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#http_match VpclatticeListenerRule#http_match}

---

### VpclatticeListenerRuleMatchHttpMatch <a name="VpclatticeListenerRuleMatchHttpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleMatchHttpMatch {
	HeaderMatches: interface{},
	Method: *string,
	PathMatch: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.headerMatches">HeaderMatches</a></code> | <code>interface{}</code> | header_matches block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#method VpclatticeListenerRule#method}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.pathMatch">PathMatch</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a></code> | path_match block. |

---

##### `HeaderMatches`<sup>Optional</sup> <a name="HeaderMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.headerMatches"></a>

```go
HeaderMatches interface{}
```

- *Type:* interface{}

header_matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#header_matches VpclatticeListenerRule#header_matches}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#method VpclatticeListenerRule#method}.

---

##### `PathMatch`<sup>Optional</sup> <a name="PathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch.property.pathMatch"></a>

```go
PathMatch VpclatticeListenerRuleMatchHttpMatchPathMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a>

path_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#path_match VpclatticeListenerRule#path_match}

---

### VpclatticeListenerRuleMatchHttpMatchHeaderMatches <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches {
	Match: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch,
	Name: *string,
	CaseSensitive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}. |

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.match"></a>

```go
Match VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#match VpclatticeListenerRule#match}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}.

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatches.property.caseSensitive"></a>

```go
CaseSensitive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}.

---

### VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch {
	Contains: *string,
	Exact: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.contains">Contains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#contains VpclatticeListenerRule#contains}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.exact">Exact</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#contains VpclatticeListenerRule#contains}.

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}.

---

### VpclatticeListenerRuleMatchHttpMatchPathMatch <a name="VpclatticeListenerRuleMatchHttpMatchPathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleMatchHttpMatchPathMatch {
	Match: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch,
	CaseSensitive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}. |

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.property.match"></a>

```go
Match VpclatticeListenerRuleMatchHttpMatchPathMatchMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#match VpclatticeListenerRule#match}

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch.property.caseSensitive"></a>

```go
CaseSensitive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}.

---

### VpclatticeListenerRuleMatchHttpMatchPathMatchMatch <a name="VpclatticeListenerRuleMatchHttpMatchPathMatchMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch {
	Exact: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.property.exact">Exact</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}.

---

### VpclatticeListenerRuleTimeouts <a name="VpclatticeListenerRuleTimeouts" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

&vpclatticelistenerrule.VpclatticeListenerRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#create VpclatticeListenerRule#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#delete VpclatticeListenerRule#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#update VpclatticeListenerRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#create VpclatticeListenerRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#delete VpclatticeListenerRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/vpclattice_listener_rule#update VpclatticeListenerRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeListenerRuleActionFixedResponseOutputReference <a name="VpclatticeListenerRuleActionFixedResponseOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleActionFixedResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeListenerRuleActionFixedResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() VpclatticeListenerRuleActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a>

---


### VpclatticeListenerRuleActionForwardOutputReference <a name="VpclatticeListenerRuleActionForwardOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleActionForwardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeListenerRuleActionForwardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.putTargetGroups">PutTargetGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetGroups` <a name="PutTargetGroups" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.putTargetGroups"></a>

```go
func PutTargetGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList">VpclatticeListenerRuleActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.targetGroupsInput">TargetGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.targetGroups"></a>

```go
func TargetGroups() VpclatticeListenerRuleActionForwardTargetGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList">VpclatticeListenerRuleActionForwardTargetGroupsList</a>

---

##### `TargetGroupsInput`<sup>Optional</sup> <a name="TargetGroupsInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.targetGroupsInput"></a>

```go
func TargetGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference.property.internalValue"></a>

```go
func InternalValue() VpclatticeListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a>

---


### VpclatticeListenerRuleActionForwardTargetGroupsList <a name="VpclatticeListenerRuleActionForwardTargetGroupsList" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleActionForwardTargetGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpclatticeListenerRuleActionForwardTargetGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.get"></a>

```go
func Get(index *f64) VpclatticeListenerRuleActionForwardTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpclatticeListenerRuleActionForwardTargetGroupsOutputReference <a name="VpclatticeListenerRuleActionForwardTargetGroupsOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleActionForwardTargetGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpclatticeListenerRuleActionForwardTargetGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput">TargetGroupIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">TargetGroupIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetGroupIdentifierInput`<sup>Optional</sup> <a name="TargetGroupIdentifierInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifierInput"></a>

```go
func TargetGroupIdentifierInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `TargetGroupIdentifier`<sup>Required</sup> <a name="TargetGroupIdentifier" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```go
func TargetGroupIdentifier() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpclatticeListenerRuleActionOutputReference <a name="VpclatticeListenerRuleActionOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeListenerRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putFixedResponse">PutFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putForward">PutForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resetFixedResponse">ResetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resetForward">ResetForward</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedResponse` <a name="PutFixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putFixedResponse"></a>

```go
func PutFixedResponse(value VpclatticeListenerRuleActionFixedResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a>

---

##### `PutForward` <a name="PutForward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putForward"></a>

```go
func PutForward(value VpclatticeListenerRuleActionForward)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a>

---

##### `ResetFixedResponse` <a name="ResetFixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resetFixedResponse"></a>

```go
func ResetFixedResponse()
```

##### `ResetForward` <a name="ResetForward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.resetForward"></a>

```go
func ResetForward()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference">VpclatticeListenerRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference">VpclatticeListenerRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fixedResponseInput">FixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.forwardInput">ForwardInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fixedResponse"></a>

```go
func FixedResponse() VpclatticeListenerRuleActionFixedResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponseOutputReference">VpclatticeListenerRuleActionFixedResponseOutputReference</a>

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.forward"></a>

```go
func Forward() VpclatticeListenerRuleActionForwardOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForwardOutputReference">VpclatticeListenerRuleActionForwardOutputReference</a>

---

##### `FixedResponseInput`<sup>Optional</sup> <a name="FixedResponseInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.fixedResponseInput"></a>

```go
func FixedResponseInput() VpclatticeListenerRuleActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionFixedResponse">VpclatticeListenerRuleActionFixedResponse</a>

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.forwardInput"></a>

```go
func ForwardInput() VpclatticeListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionForward">VpclatticeListenerRuleActionForward</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() VpclatticeListenerRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleAction">VpclatticeListenerRuleAction</a>

---


### VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleMatchHttpMatchHeaderMatchesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.get"></a>

```go
func Get(index *f64) VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a>

---


### VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch"></a>

```go
func PutMatch(value VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a>

---

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.resetCaseSensitive"></a>

```go
func ResetCaseSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.match"></a>

```go
func Match() VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a>

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitiveInput"></a>

```go
func CaseSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.matchInput"></a>

```go
func MatchInput() VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive"></a>

```go
func CaseSensitive() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpclatticeListenerRuleMatchHttpMatchOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleMatchHttpMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeListenerRuleMatchHttpMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putHeaderMatches">PutHeaderMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putPathMatch">PutPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetHeaderMatches">ResetHeaderMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetPathMatch">ResetPathMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderMatches` <a name="PutHeaderMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putHeaderMatches"></a>

```go
func PutHeaderMatches(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putHeaderMatches.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPathMatch` <a name="PutPathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putPathMatch"></a>

```go
func PutPathMatch(value VpclatticeListenerRuleMatchHttpMatchPathMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.putPathMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a>

---

##### `ResetHeaderMatches` <a name="ResetHeaderMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetHeaderMatches"></a>

```go
func ResetHeaderMatches()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPathMatch` <a name="ResetPathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.resetPathMatch"></a>

```go
func ResetPathMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.headerMatches">HeaderMatches</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.pathMatch">PathMatch</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.headerMatchesInput">HeaderMatchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.pathMatchInput">PathMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderMatches`<sup>Required</sup> <a name="HeaderMatches" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.headerMatches"></a>

```go
func HeaderMatches() VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList">VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList</a>

---

##### `PathMatch`<sup>Required</sup> <a name="PathMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.pathMatch"></a>

```go
func PathMatch() VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference</a>

---

##### `HeaderMatchesInput`<sup>Optional</sup> <a name="HeaderMatchesInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.headerMatchesInput"></a>

```go
func HeaderMatchesInput() interface{}
```

- *Type:* interface{}

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PathMatchInput`<sup>Optional</sup> <a name="PathMatchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.pathMatchInput"></a>

```go
func PathMatchInput() VpclatticeListenerRuleMatchHttpMatchPathMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a>

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() VpclatticeListenerRuleMatchHttpMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a>

---


### VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() VpclatticeListenerRuleMatchHttpMatchPathMatchMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a>

---


### VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference <a name="VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.putMatch"></a>

```go
func PutMatch(value VpclatticeListenerRuleMatchHttpMatchPathMatchMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a>

---

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.resetCaseSensitive"></a>

```go
func ResetCaseSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.match"></a>

```go
func Match() VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference</a>

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitiveInput"></a>

```go
func CaseSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.matchInput"></a>

```go
func MatchInput() VpclatticeListenerRuleMatchHttpMatchPathMatchMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchMatch">VpclatticeListenerRuleMatchHttpMatchPathMatchMatch</a>

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive"></a>

```go
func CaseSensitive() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() VpclatticeListenerRuleMatchHttpMatchPathMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchPathMatch">VpclatticeListenerRuleMatchHttpMatchPathMatch</a>

---


### VpclatticeListenerRuleMatchOutputReference <a name="VpclatticeListenerRuleMatchOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeListenerRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.putHttpMatch">PutHttpMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resetHttpMatch">ResetHttpMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpMatch` <a name="PutHttpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.putHttpMatch"></a>

```go
func PutHttpMatch(value VpclatticeListenerRuleMatchHttpMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.putHttpMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a>

---

##### `ResetHttpMatch` <a name="ResetHttpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.resetHttpMatch"></a>

```go
func ResetHttpMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.httpMatch">HttpMatch</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.httpMatchInput">HttpMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpMatch`<sup>Required</sup> <a name="HttpMatch" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.httpMatch"></a>

```go
func HttpMatch() VpclatticeListenerRuleMatchHttpMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatchOutputReference">VpclatticeListenerRuleMatchHttpMatchOutputReference</a>

---

##### `HttpMatchInput`<sup>Optional</sup> <a name="HttpMatchInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.httpMatchInput"></a>

```go
func HttpMatchInput() VpclatticeListenerRuleMatchHttpMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchHttpMatch">VpclatticeListenerRuleMatchHttpMatch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() VpclatticeListenerRuleMatch
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleMatch">VpclatticeListenerRuleMatch</a>

---


### VpclatticeListenerRuleTimeoutsOutputReference <a name="VpclatticeListenerRuleTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpclatticelistenerrule"

vpclatticelistenerrule.NewVpclatticeListenerRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeListenerRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeListenerRule.VpclatticeListenerRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



