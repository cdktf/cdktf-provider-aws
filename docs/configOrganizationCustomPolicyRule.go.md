# `configOrganizationCustomPolicyRule` Submodule <a name="`configOrganizationCustomPolicyRule` Submodule" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationCustomPolicyRule <a name="ConfigOrganizationCustomPolicyRule" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule aws_config_organization_custom_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/configorganizationcustompolicyrule"

configorganizationcustompolicyrule.NewConfigOrganizationCustomPolicyRule(scope Construct, id *string, config ConfigOrganizationCustomPolicyRuleConfig) ConfigOrganizationCustomPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig">ConfigOrganizationCustomPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig">ConfigOrganizationCustomPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts">ResetDebugLogDeliveryAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope">ResetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope">ResetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope">ResetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope">ResetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts"></a>

```go
func PutTimeouts(value ConfigOrganizationCustomPolicyRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

---

##### `ResetDebugLogDeliveryAccounts` <a name="ResetDebugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDebugLogDeliveryAccounts"></a>

```go
func ResetDebugLogDeliveryAccounts()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetExcludedAccounts"></a>

```go
func ResetExcludedAccounts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetInputParameters"></a>

```go
func ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetMaximumExecutionFrequency"></a>

```go
func ResetMaximumExecutionFrequency()
```

##### `ResetResourceIdScope` <a name="ResetResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceIdScope"></a>

```go
func ResetResourceIdScope()
```

##### `ResetResourceTypesScope` <a name="ResetResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetResourceTypesScope"></a>

```go
func ResetResourceTypesScope()
```

##### `ResetTagKeyScope` <a name="ResetTagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagKeyScope"></a>

```go
func ResetTagKeyScope()
```

##### `ResetTagValueScope` <a name="ResetTagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTagValueScope"></a>

```go
func ResetTagValueScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/configorganizationcustompolicyrule"

configorganizationcustompolicyrule.ConfigOrganizationCustomPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/configorganizationcustompolicyrule"

configorganizationcustompolicyrule.ConfigOrganizationCustomPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/configorganizationcustompolicyrule"

configorganizationcustompolicyrule.ConfigOrganizationCustomPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/configorganizationcustompolicyrule"

configorganizationcustompolicyrule.ConfigOrganizationCustomPolicyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigOrganizationCustomPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigOrganizationCustomPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationCustomPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput">DebugLogDeliveryAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput">InputParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput">PolicyRuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput">PolicyTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput">ResourceIdScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput">ResourceTypesScopeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput">TagKeyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput">TagValueScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput">TriggerTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts">DebugLogDeliveryAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts">ExcludedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters">InputParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime">PolicyRuntime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText">PolicyText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes">TriggerTypes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeouts"></a>

```go
func Timeouts() ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference">ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference</a>

---

##### `DebugLogDeliveryAccountsInput`<sup>Optional</sup> <a name="DebugLogDeliveryAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccountsInput"></a>

```go
func DebugLogDeliveryAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccountsInput"></a>

```go
func ExcludedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParametersInput"></a>

```go
func InputParametersInput() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequencyInput"></a>

```go
func MaximumExecutionFrequencyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyRuntimeInput`<sup>Optional</sup> <a name="PolicyRuntimeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntimeInput"></a>

```go
func PolicyRuntimeInput() *string
```

- *Type:* *string

---

##### `PolicyTextInput`<sup>Optional</sup> <a name="PolicyTextInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyTextInput"></a>

```go
func PolicyTextInput() *string
```

- *Type:* *string

---

##### `ResourceIdScopeInput`<sup>Optional</sup> <a name="ResourceIdScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScopeInput"></a>

```go
func ResourceIdScopeInput() *string
```

- *Type:* *string

---

##### `ResourceTypesScopeInput`<sup>Optional</sup> <a name="ResourceTypesScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScopeInput"></a>

```go
func ResourceTypesScopeInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagKeyScopeInput`<sup>Optional</sup> <a name="TagKeyScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScopeInput"></a>

```go
func TagKeyScopeInput() *string
```

- *Type:* *string

---

##### `TagValueScopeInput`<sup>Optional</sup> <a name="TagValueScopeInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScopeInput"></a>

```go
func TagValueScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerTypesInput`<sup>Optional</sup> <a name="TriggerTypesInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypesInput"></a>

```go
func TriggerTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DebugLogDeliveryAccounts`<sup>Required</sup> <a name="DebugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.debugLogDeliveryAccounts"></a>

```go
func DebugLogDeliveryAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.excludedAccounts"></a>

```go
func ExcludedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.inputParameters"></a>

```go
func InputParameters() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.maximumExecutionFrequency"></a>

```go
func MaximumExecutionFrequency() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyRuntime"></a>

```go
func PolicyRuntime() *string
```

- *Type:* *string

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.policyText"></a>

```go
func PolicyText() *string
```

- *Type:* *string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceIdScope"></a>

```go
func ResourceIdScope() *string
```

- *Type:* *string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.resourceTypesScope"></a>

```go
func ResourceTypesScope() *[]*string
```

- *Type:* *[]*string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagKeyScope"></a>

```go
func TagKeyScope() *string
```

- *Type:* *string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tagValueScope"></a>

```go
func TagValueScope() *string
```

- *Type:* *string

---

##### `TriggerTypes`<sup>Required</sup> <a name="TriggerTypes" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.triggerTypes"></a>

```go
func TriggerTypes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationCustomPolicyRuleConfig <a name="ConfigOrganizationCustomPolicyRuleConfig" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/configorganizationcustompolicyrule"

&configorganizationcustompolicyrule.ConfigOrganizationCustomPolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PolicyRuntime: *string,
	PolicyText: *string,
	TriggerTypes: *[]*string,
	DebugLogDeliveryAccounts: *[]*string,
	Description: *string,
	ExcludedAccounts: *[]*string,
	Id: *string,
	InputParameters: *string,
	MaximumExecutionFrequency: *string,
	ResourceIdScope: *string,
	ResourceTypesScope: *[]*string,
	TagKeyScope: *string,
	TagValueScope: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime">PolicyRuntime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText">PolicyText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes">TriggerTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts">DebugLogDeliveryAccounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts">ExcludedAccounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters">InputParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}.

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyRuntime"></a>

```go
PolicyRuntime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}.

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.policyText"></a>

```go
PolicyText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}.

---

##### `TriggerTypes`<sup>Required</sup> <a name="TriggerTypes" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.triggerTypes"></a>

```go
TriggerTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}.

---

##### `DebugLogDeliveryAccounts`<sup>Optional</sup> <a name="DebugLogDeliveryAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.debugLogDeliveryAccounts"></a>

```go
DebugLogDeliveryAccounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}.

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.excludedAccounts"></a>

```go
ExcludedAccounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.inputParameters"></a>

```go
InputParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.maximumExecutionFrequency"></a>

```go
MaximumExecutionFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}.

---

##### `ResourceIdScope`<sup>Optional</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceIdScope"></a>

```go
ResourceIdScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}.

---

##### `ResourceTypesScope`<sup>Optional</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.resourceTypesScope"></a>

```go
ResourceTypesScope *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}.

---

##### `TagKeyScope`<sup>Optional</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagKeyScope"></a>

```go
TagKeyScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}.

---

##### `TagValueScope`<sup>Optional</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.tagValueScope"></a>

```go
TagValueScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleConfig.property.timeouts"></a>

```go
Timeouts ConfigOrganizationCustomPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts">ConfigOrganizationCustomPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#timeouts ConfigOrganizationCustomPolicyRule#timeouts}

---

### ConfigOrganizationCustomPolicyRuleTimeouts <a name="ConfigOrganizationCustomPolicyRuleTimeouts" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/configorganizationcustompolicyrule"

&configorganizationcustompolicyrule.ConfigOrganizationCustomPolicyRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference <a name="ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/configorganizationcustompolicyrule"

configorganizationcustompolicyrule.NewConfigOrganizationCustomPolicyRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configOrganizationCustomPolicyRule.ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



