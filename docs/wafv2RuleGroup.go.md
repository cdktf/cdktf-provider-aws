# `wafv2RuleGroup` Submodule <a name="`wafv2RuleGroup` Submodule" id="@cdktf/provider-aws.wafv2RuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2RuleGroup <a name="Wafv2RuleGroup" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group aws_wafv2_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroup(scope Construct, id *string, config Wafv2RuleGroupConfig) Wafv2RuleGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig">Wafv2RuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig">Wafv2RuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody">PutCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig">PutVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetCustomResponseBody">ResetCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomResponseBody` <a name="PutCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody"></a>

```go
func PutCustomResponseBody(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVisibilityConfig` <a name="PutVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig"></a>

```go
func PutVisibilityConfig(value Wafv2RuleGroupVisibilityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---

##### `ResetCustomResponseBody` <a name="ResetCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetCustomResponseBody"></a>

```go
func ResetCustomResponseBody()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRule"></a>

```go
func ResetRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.Wafv2RuleGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.Wafv2RuleGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.Wafv2RuleGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.Wafv2RuleGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Wafv2RuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Wafv2RuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Wafv2RuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBody">CustomResponseBody</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList">Wafv2RuleGroupCustomResponseBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lockToken">LockToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList">Wafv2RuleGroupRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference">Wafv2RuleGroupVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBodyInput">CustomResponseBodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfigInput">VisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CustomResponseBody`<sup>Required</sup> <a name="CustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBody"></a>

```go
func CustomResponseBody() Wafv2RuleGroupCustomResponseBodyList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList">Wafv2RuleGroupCustomResponseBodyList</a>

---

##### `LockToken`<sup>Required</sup> <a name="LockToken" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lockToken"></a>

```go
func LockToken() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.rule"></a>

```go
func Rule() Wafv2RuleGroupRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList">Wafv2RuleGroupRuleList</a>

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfig"></a>

```go
func VisibilityConfig() Wafv2RuleGroupVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference">Wafv2RuleGroupVisibilityConfigOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `CustomResponseBodyInput`<sup>Optional</sup> <a name="CustomResponseBodyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBodyInput"></a>

```go
func CustomResponseBodyInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VisibilityConfigInput`<sup>Optional</sup> <a name="VisibilityConfigInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfigInput"></a>

```go
func VisibilityConfigInput() Wafv2RuleGroupVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2RuleGroupConfig <a name="Wafv2RuleGroupConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Capacity: *f64,
	Scope: *string,
	VisibilityConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig,
	CustomResponseBody: interface{},
	Description: *string,
	Id: *string,
	Name: *string,
	NamePrefix: *string,
	Rule: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.customResponseBody">CustomResponseBody</a></code> | <code>interface{}</code> | custom_response_body block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}.

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.visibilityConfig"></a>

```go
VisibilityConfig Wafv2RuleGroupVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}

---

##### `CustomResponseBody`<sup>Optional</sup> <a name="CustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.customResponseBody"></a>

```go
CustomResponseBody interface{}
```

- *Type:* interface{}

custom_response_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response_body Wafv2RuleGroup#custom_response_body}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#rule Wafv2RuleGroup#rule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}.

---

### Wafv2RuleGroupCustomResponseBody <a name="Wafv2RuleGroupCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupCustomResponseBody {
	Content: *string,
	ContentType: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}.

---

### Wafv2RuleGroupRule <a name="Wafv2RuleGroupRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRule {
	Action: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleAction,
	Name: *string,
	Priority: *f64,
	VisibilityConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig,
	CaptchaConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig,
	RuleLabel: interface{},
	Statement: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.captchaConfig">CaptchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.ruleLabel">RuleLabel</a></code> | <code>interface{}</code> | rule_label block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.statement">Statement</a></code> | <code>interface{}</code> | statement block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.action"></a>

```go
Action Wafv2RuleGroupRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#action Wafv2RuleGroup#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}.

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.visibilityConfig"></a>

```go
VisibilityConfig Wafv2RuleGroupRuleVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}

---

##### `CaptchaConfig`<sup>Optional</sup> <a name="CaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.captchaConfig"></a>

```go
CaptchaConfig Wafv2RuleGroupRuleCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#captcha_config Wafv2RuleGroup#captcha_config}

---

##### `RuleLabel`<sup>Optional</sup> <a name="RuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.ruleLabel"></a>

```go
RuleLabel interface{}
```

- *Type:* interface{}

rule_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#rule_label Wafv2RuleGroup#rule_label}

---

##### `Statement`<sup>Optional</sup> <a name="Statement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.statement"></a>

```go
Statement interface{}
```

- *Type:* interface{}

statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}

---

### Wafv2RuleGroupRuleAction <a name="Wafv2RuleGroupRuleAction" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleAction {
	Allow: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow,
	Block: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock,
	Captcha: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha,
	Challenge: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge,
	Count: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.block">Block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | block block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.captcha">Captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | captcha block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.challenge">Challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | challenge block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.count">Count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | count block. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.allow"></a>

```go
Allow Wafv2RuleGroupRuleActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#allow Wafv2RuleGroup#allow}

---

##### `Block`<sup>Optional</sup> <a name="Block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.block"></a>

```go
Block Wafv2RuleGroupRuleActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#block Wafv2RuleGroup#block}

---

##### `Captcha`<sup>Optional</sup> <a name="Captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.captcha"></a>

```go
Captcha Wafv2RuleGroupRuleActionCaptcha
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

captcha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#captcha Wafv2RuleGroup#captcha}

---

##### `Challenge`<sup>Optional</sup> <a name="Challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.challenge"></a>

```go
Challenge Wafv2RuleGroupRuleActionChallenge
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#challenge Wafv2RuleGroup#challenge}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.count"></a>

```go
Count Wafv2RuleGroupRuleActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#count Wafv2RuleGroup#count}

---

### Wafv2RuleGroupRuleActionAllow <a name="Wafv2RuleGroupRuleActionAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionAllow {
	CustomRequestHandling: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.property.customRequestHandling"></a>

```go
CustomRequestHandling Wafv2RuleGroupRuleActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionAllowCustomRequestHandling <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling {
	InsertHeader: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>interface{}</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.property.insertHeader"></a>

```go
InsertHeader interface{}
```

- *Type:* interface{}

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionBlock <a name="Wafv2RuleGroupRuleActionBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionBlock {
	CustomResponse: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.property.customResponse">CustomResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `CustomResponse`<sup>Optional</sup> <a name="CustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.property.customResponse"></a>

```go
CustomResponse Wafv2RuleGroupRuleActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response Wafv2RuleGroup#custom_response}

---

### Wafv2RuleGroupRuleActionBlockCustomResponse <a name="Wafv2RuleGroupRuleActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionBlockCustomResponse {
	ResponseCode: *f64,
	CustomResponseBodyKey: *string,
	ResponseHeader: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.customResponseBodyKey">CustomResponseBodyKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseHeader">ResponseHeader</a></code> | <code>interface{}</code> | response_header block. |

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseCode"></a>

```go
ResponseCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}.

---

##### `CustomResponseBodyKey`<sup>Optional</sup> <a name="CustomResponseBodyKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.customResponseBodyKey"></a>

```go
CustomResponseBodyKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}.

---

##### `ResponseHeader`<sup>Optional</sup> <a name="ResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseHeader"></a>

```go
ResponseHeader interface{}
```

- *Type:* interface{}

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#response_header Wafv2RuleGroup#response_header}

---

### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionCaptcha <a name="Wafv2RuleGroupRuleActionCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionCaptcha {
	CustomRequestHandling: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.property.customRequestHandling"></a>

```go
CustomRequestHandling Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling {
	InsertHeader: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>interface{}</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.property.insertHeader"></a>

```go
InsertHeader interface{}
```

- *Type:* interface{}

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionChallenge <a name="Wafv2RuleGroupRuleActionChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionChallenge {
	CustomRequestHandling: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.property.customRequestHandling"></a>

```go
CustomRequestHandling Wafv2RuleGroupRuleActionChallengeCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionChallengeCustomRequestHandling <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling {
	InsertHeader: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>interface{}</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.property.insertHeader"></a>

```go
InsertHeader interface{}
```

- *Type:* interface{}

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionCount <a name="Wafv2RuleGroupRuleActionCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionCount {
	CustomRequestHandling: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `CustomRequestHandling`<sup>Optional</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.property.customRequestHandling"></a>

```go
CustomRequestHandling Wafv2RuleGroupRuleActionCountCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionCountCustomRequestHandling <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling {
	InsertHeader: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.property.insertHeader">InsertHeader</a></code> | <code>interface{}</code> | insert_header block. |

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.property.insertHeader"></a>

```go
InsertHeader interface{}
```

- *Type:* interface{}

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleCaptchaConfig <a name="Wafv2RuleGroupRuleCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleCaptchaConfig {
	ImmunityTimeProperty: github.com/cdktf/cdktf-provider-aws-go/aws/v19.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `ImmunityTimeProperty`<sup>Optional</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.property.immunityTimeProperty"></a>

```go
ImmunityTimeProperty Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#immunity_time_property Wafv2RuleGroup#immunity_time_property}

---

### Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty <a name="Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty {
	ImmunityTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.property.immunityTime">ImmunityTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}. |

---

##### `ImmunityTime`<sup>Optional</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```go
ImmunityTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}.

---

### Wafv2RuleGroupRuleRuleLabel <a name="Wafv2RuleGroupRuleRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleRuleLabel {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

### Wafv2RuleGroupRuleVisibilityConfig <a name="Wafv2RuleGroupRuleVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupRuleVisibilityConfig {
	CloudwatchMetricsEnabled: interface{},
	MetricName: *string,
	SampledRequestsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}. |

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```go
CloudwatchMetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.sampledRequestsEnabled"></a>

```go
SampledRequestsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

### Wafv2RuleGroupVisibilityConfig <a name="Wafv2RuleGroupVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

&wafv2rulegroup.Wafv2RuleGroupVisibilityConfig {
	CloudwatchMetricsEnabled: interface{},
	MetricName: *string,
	SampledRequestsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}. |

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```go
CloudwatchMetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.sampledRequestsEnabled"></a>

```go
SampledRequestsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2RuleGroupCustomResponseBodyList <a name="Wafv2RuleGroupCustomResponseBodyList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupCustomResponseBodyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2RuleGroupCustomResponseBodyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get"></a>

```go
func Get(index *f64) Wafv2RuleGroupCustomResponseBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupCustomResponseBodyOutputReference <a name="Wafv2RuleGroupCustomResponseBodyOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupCustomResponseBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2RuleGroupCustomResponseBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```go
func Get(index *f64) Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```go
func PutInsertHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```go
func InsertHeader() Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```go
func InsertHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionAllowOutputReference <a name="Wafv2RuleGroupRuleActionAllowOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling"></a>

```go
func PutCustomRequestHandling(value Wafv2RuleGroupRuleActionAllowCustomRequestHandling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resetCustomRequestHandling"></a>

```go
func ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandling"></a>

```go
func CustomRequestHandling() Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandlingInput"></a>

```go
func CustomRequestHandlingInput() Wafv2RuleGroupRuleActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---


### Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference <a name="Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionBlockCustomResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader">PutResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">ResetCustomResponseBodyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetResponseHeader">ResetResponseHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponseHeader` <a name="PutResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```go
func PutResponseHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomResponseBodyKey` <a name="ResetCustomResponseBodyKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```go
func ResetCustomResponseBodyKey()
```

##### `ResetResponseHeader` <a name="ResetResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```go
func ResetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeader">ResponseHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">CustomResponseBodyKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput">ResponseHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey">CustomResponseBodyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```go
func ResponseHeader() Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList</a>

---

##### `CustomResponseBodyKeyInput`<sup>Optional</sup> <a name="CustomResponseBodyKeyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```go
func CustomResponseBodyKeyInput() *string
```

- *Type:* *string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```go
func ResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `ResponseHeaderInput`<sup>Optional</sup> <a name="ResponseHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```go
func ResponseHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `CustomResponseBodyKey`<sup>Required</sup> <a name="CustomResponseBodyKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```go
func CustomResponseBodyKey() *string
```

- *Type:* *string

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCode"></a>

```go
func ResponseCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---


### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get"></a>

```go
func Get(index *f64) Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionBlockOutputReference <a name="Wafv2RuleGroupRuleActionBlockOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionBlockOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionBlockOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse">PutCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resetCustomResponse">ResetCustomResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomResponse` <a name="PutCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse"></a>

```go
func PutCustomResponse(value Wafv2RuleGroupRuleActionBlockCustomResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---

##### `ResetCustomResponse` <a name="ResetCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resetCustomResponse"></a>

```go
func ResetCustomResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponse">CustomResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference">Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponseInput">CustomResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomResponse`<sup>Required</sup> <a name="CustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponse"></a>

```go
func CustomResponse() Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference">Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference</a>

---

##### `CustomResponseInput`<sup>Optional</sup> <a name="CustomResponseInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponseInput"></a>

```go
func CustomResponseInput() Wafv2RuleGroupRuleActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get"></a>

```go
func Get(index *f64) Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader"></a>

```go
func PutInsertHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader"></a>

```go
func InsertHeader() Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```go
func InsertHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionCaptchaOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionCaptchaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionCaptchaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling"></a>

```go
func PutCustomRequestHandling(value Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resetCustomRequestHandling"></a>

```go
func ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandling"></a>

```go
func CustomRequestHandling() Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandlingInput"></a>

```go
func CustomRequestHandlingInput() Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionCaptcha
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get"></a>

```go
func Get(index *f64) Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader"></a>

```go
func PutInsertHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader"></a>

```go
func InsertHeader() Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```go
func InsertHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionChallengeCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionChallengeOutputReference <a name="Wafv2RuleGroupRuleActionChallengeOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionChallengeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionChallengeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling"></a>

```go
func PutCustomRequestHandling(value Wafv2RuleGroupRuleActionChallengeCustomRequestHandling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resetCustomRequestHandling"></a>

```go
func ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandling"></a>

```go
func CustomRequestHandling() Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandlingInput"></a>

```go
func CustomRequestHandlingInput() Wafv2RuleGroupRuleActionChallengeCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionChallenge
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get"></a>

```go
func Get(index *f64) Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader">PutInsertHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInsertHeader` <a name="PutInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader"></a>

```go
func PutInsertHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput">InsertHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader"></a>

```go
func InsertHeader() Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList</a>

---

##### `InsertHeaderInput`<sup>Optional</sup> <a name="InsertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```go
func InsertHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionCountCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionCountOutputReference <a name="Wafv2RuleGroupRuleActionCountOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling">PutCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resetCustomRequestHandling">ResetCustomRequestHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRequestHandling` <a name="PutCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling"></a>

```go
func PutCustomRequestHandling(value Wafv2RuleGroupRuleActionCountCustomRequestHandling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---

##### `ResetCustomRequestHandling` <a name="ResetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resetCustomRequestHandling"></a>

```go
func ResetCustomRequestHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandlingInput">CustomRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandling"></a>

```go
func CustomRequestHandling() Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference</a>

---

##### `CustomRequestHandlingInput`<sup>Optional</sup> <a name="CustomRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandlingInput"></a>

```go
func CustomRequestHandlingInput() Wafv2RuleGroupRuleActionCountCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---


### Wafv2RuleGroupRuleActionOutputReference <a name="Wafv2RuleGroupRuleActionOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock">PutBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha">PutCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge">PutChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount">PutCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetBlock">ResetBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCaptcha">ResetCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetChallenge">ResetChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow"></a>

```go
func PutAllow(value Wafv2RuleGroupRuleActionAllow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---

##### `PutBlock` <a name="PutBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock"></a>

```go
func PutBlock(value Wafv2RuleGroupRuleActionBlock)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---

##### `PutCaptcha` <a name="PutCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha"></a>

```go
func PutCaptcha(value Wafv2RuleGroupRuleActionCaptcha)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---

##### `PutChallenge` <a name="PutChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge"></a>

```go
func PutChallenge(value Wafv2RuleGroupRuleActionChallenge)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---

##### `PutCount` <a name="PutCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount"></a>

```go
func PutCount(value Wafv2RuleGroupRuleActionCount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetBlock` <a name="ResetBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetBlock"></a>

```go
func ResetBlock()
```

##### `ResetCaptcha` <a name="ResetCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCaptcha"></a>

```go
func ResetCaptcha()
```

##### `ResetChallenge` <a name="ResetChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetChallenge"></a>

```go
func ResetChallenge()
```

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCount"></a>

```go
func ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference">Wafv2RuleGroupRuleActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.block">Block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference">Wafv2RuleGroupRuleActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captcha">Captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference">Wafv2RuleGroupRuleActionCaptchaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challenge">Challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference">Wafv2RuleGroupRuleActionChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.count">Count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference">Wafv2RuleGroupRuleActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.blockInput">BlockInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captchaInput">CaptchaInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challengeInput">ChallengeInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.countInput">CountInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allow"></a>

```go
func Allow() Wafv2RuleGroupRuleActionAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference">Wafv2RuleGroupRuleActionAllowOutputReference</a>

---

##### `Block`<sup>Required</sup> <a name="Block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.block"></a>

```go
func Block() Wafv2RuleGroupRuleActionBlockOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference">Wafv2RuleGroupRuleActionBlockOutputReference</a>

---

##### `Captcha`<sup>Required</sup> <a name="Captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captcha"></a>

```go
func Captcha() Wafv2RuleGroupRuleActionCaptchaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference">Wafv2RuleGroupRuleActionCaptchaOutputReference</a>

---

##### `Challenge`<sup>Required</sup> <a name="Challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challenge"></a>

```go
func Challenge() Wafv2RuleGroupRuleActionChallengeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference">Wafv2RuleGroupRuleActionChallengeOutputReference</a>

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.count"></a>

```go
func Count() Wafv2RuleGroupRuleActionCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference">Wafv2RuleGroupRuleActionCountOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allowInput"></a>

```go
func AllowInput() Wafv2RuleGroupRuleActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---

##### `BlockInput`<sup>Optional</sup> <a name="BlockInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.blockInput"></a>

```go
func BlockInput() Wafv2RuleGroupRuleActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---

##### `CaptchaInput`<sup>Optional</sup> <a name="CaptchaInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captchaInput"></a>

```go
func CaptchaInput() Wafv2RuleGroupRuleActionCaptcha
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---

##### `ChallengeInput`<sup>Optional</sup> <a name="ChallengeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challengeInput"></a>

```go
func ChallengeInput() Wafv2RuleGroupRuleActionChallenge
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.countInput"></a>

```go
func CountInput() Wafv2RuleGroupRuleActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---


### Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">ResetImmunityTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImmunityTime` <a name="ResetImmunityTime" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```go
func ResetImmunityTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">ImmunityTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">ImmunityTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImmunityTimeInput`<sup>Optional</sup> <a name="ImmunityTimeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```go
func ImmunityTimeInput() *f64
```

- *Type:* *f64

---

##### `ImmunityTime`<sup>Required</sup> <a name="ImmunityTime" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```go
func ImmunityTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2RuleGroupRuleCaptchaConfigOutputReference <a name="Wafv2RuleGroupRuleCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleCaptchaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleCaptchaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty">PutImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resetImmunityTimeProperty">ResetImmunityTimeProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImmunityTimeProperty` <a name="PutImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```go
func PutImmunityTimeProperty(value Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `ResetImmunityTimeProperty` <a name="ResetImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```go
func ResetImmunityTimeProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimeProperty">ImmunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput">ImmunityTimePropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImmunityTimeProperty`<sup>Required</sup> <a name="ImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```go
func ImmunityTimeProperty() Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `ImmunityTimePropertyInput`<sup>Optional</sup> <a name="ImmunityTimePropertyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```go
func ImmunityTimePropertyInput() Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---


### Wafv2RuleGroupRuleList <a name="Wafv2RuleGroupRuleList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2RuleGroupRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get"></a>

```go
func Get(index *f64) Wafv2RuleGroupRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleOutputReference <a name="Wafv2RuleGroupRuleOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2RuleGroupRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig">PutCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel">PutRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig">PutVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetCaptchaConfig">ResetCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetRuleLabel">ResetRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetStatement">ResetStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction"></a>

```go
func PutAction(value Wafv2RuleGroupRuleAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---

##### `PutCaptchaConfig` <a name="PutCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig"></a>

```go
func PutCaptchaConfig(value Wafv2RuleGroupRuleCaptchaConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---

##### `PutRuleLabel` <a name="PutRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel"></a>

```go
func PutRuleLabel(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVisibilityConfig` <a name="PutVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig"></a>

```go
func PutVisibilityConfig(value Wafv2RuleGroupRuleVisibilityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---

##### `ResetCaptchaConfig` <a name="ResetCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetCaptchaConfig"></a>

```go
func ResetCaptchaConfig()
```

##### `ResetRuleLabel` <a name="ResetRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetRuleLabel"></a>

```go
func ResetRuleLabel()
```

##### `ResetStatement` <a name="ResetStatement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetStatement"></a>

```go
func ResetStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference">Wafv2RuleGroupRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfig">CaptchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference">Wafv2RuleGroupRuleCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabel">RuleLabel</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList">Wafv2RuleGroupRuleRuleLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statementInput">StatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfig">VisibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference">Wafv2RuleGroupRuleVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfigInput">CaptchaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabelInput">RuleLabelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfigInput">VisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statement">Statement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.action"></a>

```go
func Action() Wafv2RuleGroupRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference">Wafv2RuleGroupRuleActionOutputReference</a>

---

##### `CaptchaConfig`<sup>Required</sup> <a name="CaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfig"></a>

```go
func CaptchaConfig() Wafv2RuleGroupRuleCaptchaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference">Wafv2RuleGroupRuleCaptchaConfigOutputReference</a>

---

##### `RuleLabel`<sup>Required</sup> <a name="RuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabel"></a>

```go
func RuleLabel() Wafv2RuleGroupRuleRuleLabelList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList">Wafv2RuleGroupRuleRuleLabelList</a>

---

##### `StatementInput`<sup>Required</sup> <a name="StatementInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statementInput"></a>

```go
func StatementInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityConfig`<sup>Required</sup> <a name="VisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfig"></a>

```go
func VisibilityConfig() Wafv2RuleGroupRuleVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference">Wafv2RuleGroupRuleVisibilityConfigOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() Wafv2RuleGroupRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---

##### `CaptchaConfigInput`<sup>Optional</sup> <a name="CaptchaConfigInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfigInput"></a>

```go
func CaptchaConfigInput() Wafv2RuleGroupRuleCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RuleLabelInput`<sup>Optional</sup> <a name="RuleLabelInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabelInput"></a>

```go
func RuleLabelInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityConfigInput`<sup>Optional</sup> <a name="VisibilityConfigInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfigInput"></a>

```go
func VisibilityConfigInput() Wafv2RuleGroupRuleVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statement"></a>

```go
func Statement() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleRuleLabelList <a name="Wafv2RuleGroupRuleRuleLabelList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleRuleLabelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2RuleGroupRuleRuleLabelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get"></a>

```go
func Get(index *f64) Wafv2RuleGroupRuleRuleLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleRuleLabelOutputReference <a name="Wafv2RuleGroupRuleRuleLabelOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleRuleLabelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2RuleGroupRuleRuleLabelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2RuleGroupRuleVisibilityConfigOutputReference <a name="Wafv2RuleGroupRuleVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupRuleVisibilityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupRuleVisibilityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">CloudwatchMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">SampledRequestsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="CloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```go
func CloudwatchMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `SampledRequestsEnabledInput`<sup>Optional</sup> <a name="SampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```go
func SampledRequestsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```go
func CloudwatchMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```go
func SampledRequestsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupRuleVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---


### Wafv2RuleGroupVisibilityConfigOutputReference <a name="Wafv2RuleGroupVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/wafv2rulegroup"

wafv2rulegroup.NewWafv2RuleGroupVisibilityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2RuleGroupVisibilityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">CloudwatchMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">SampledRequestsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabled">SampledRequestsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="CloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```go
func CloudwatchMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `SampledRequestsEnabledInput`<sup>Optional</sup> <a name="SampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```go
func SampledRequestsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```go
func CloudwatchMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `SampledRequestsEnabled`<sup>Required</sup> <a name="SampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```go
func SampledRequestsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Wafv2RuleGroupVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---



