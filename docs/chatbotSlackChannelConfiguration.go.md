# `chatbotSlackChannelConfiguration` Submodule <a name="`chatbotSlackChannelConfiguration` Submodule" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotSlackChannelConfiguration <a name="ChatbotSlackChannelConfiguration" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration aws_chatbot_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chatbotslackchannelconfiguration"

chatbotslackchannelconfiguration.NewChatbotSlackChannelConfiguration(scope Construct, id *string, config ChatbotSlackChannelConfigurationConfig) ChatbotSlackChannelConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig">ChatbotSlackChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig">ChatbotSlackChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicyArns">ResetGuardrailPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns">ResetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserAuthorizationRequired">ResetUserAuthorizationRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value ChatbotSlackChannelConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

---

##### `ResetGuardrailPolicyArns` <a name="ResetGuardrailPolicyArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicyArns"></a>

```go
func ResetGuardrailPolicyArns()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel"></a>

```go
func ResetLoggingLevel()
```

##### `ResetSnsTopicArns` <a name="ResetSnsTopicArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns"></a>

```go
func ResetSnsTopicArns()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserAuthorizationRequired` <a name="ResetUserAuthorizationRequired" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserAuthorizationRequired"></a>

```go
func ResetUserAuthorizationRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chatbotslackchannelconfiguration"

chatbotslackchannelconfiguration.ChatbotSlackChannelConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chatbotslackchannelconfiguration"

chatbotslackchannelconfiguration.ChatbotSlackChannelConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chatbotslackchannelconfiguration"

chatbotslackchannelconfiguration.ChatbotSlackChannelConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chatbotslackchannelconfiguration"

chatbotslackchannelconfiguration.ChatbotSlackChannelConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChatbotSlackChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChatbotSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ChatbotSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.chatConfigurationArn">ChatConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelName">SlackChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamName">SlackTeamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference">ChatbotSlackChannelConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput">ConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArnsInput">GuardrailPolicyArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput">SlackChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamIdInput">SlackTeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput">SnsTopicArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequiredInput">UserAuthorizationRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName">ConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArns">GuardrailPolicyArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId">SlackChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamId">SlackTeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns">SnsTopicArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequired">UserAuthorizationRequired</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChatConfigurationArn`<sup>Required</sup> <a name="ChatConfigurationArn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.chatConfigurationArn"></a>

```go
func ChatConfigurationArn() *string
```

- *Type:* *string

---

##### `SlackChannelName`<sup>Required</sup> <a name="SlackChannelName" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelName"></a>

```go
func SlackChannelName() *string
```

- *Type:* *string

---

##### `SlackTeamName`<sup>Required</sup> <a name="SlackTeamName" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamName"></a>

```go
func SlackTeamName() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeouts"></a>

```go
func Timeouts() ChatbotSlackChannelConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference">ChatbotSlackChannelConfigurationTimeoutsOutputReference</a>

---

##### `ConfigurationNameInput`<sup>Optional</sup> <a name="ConfigurationNameInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput"></a>

```go
func ConfigurationNameInput() *string
```

- *Type:* *string

---

##### `GuardrailPolicyArnsInput`<sup>Optional</sup> <a name="GuardrailPolicyArnsInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArnsInput"></a>

```go
func GuardrailPolicyArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput"></a>

```go
func LoggingLevelInput() *string
```

- *Type:* *string

---

##### `SlackChannelIdInput`<sup>Optional</sup> <a name="SlackChannelIdInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput"></a>

```go
func SlackChannelIdInput() *string
```

- *Type:* *string

---

##### `SlackTeamIdInput`<sup>Optional</sup> <a name="SlackTeamIdInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamIdInput"></a>

```go
func SlackTeamIdInput() *string
```

- *Type:* *string

---

##### `SnsTopicArnsInput`<sup>Optional</sup> <a name="SnsTopicArnsInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput"></a>

```go
func SnsTopicArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserAuthorizationRequiredInput`<sup>Optional</sup> <a name="UserAuthorizationRequiredInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequiredInput"></a>

```go
func UserAuthorizationRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName"></a>

```go
func ConfigurationName() *string
```

- *Type:* *string

---

##### `GuardrailPolicyArns`<sup>Required</sup> <a name="GuardrailPolicyArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArns"></a>

```go
func GuardrailPolicyArns() *[]*string
```

- *Type:* *[]*string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel"></a>

```go
func LoggingLevel() *string
```

- *Type:* *string

---

##### `SlackChannelId`<sup>Required</sup> <a name="SlackChannelId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId"></a>

```go
func SlackChannelId() *string
```

- *Type:* *string

---

##### `SlackTeamId`<sup>Required</sup> <a name="SlackTeamId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamId"></a>

```go
func SlackTeamId() *string
```

- *Type:* *string

---

##### `SnsTopicArns`<sup>Required</sup> <a name="SnsTopicArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns"></a>

```go
func SnsTopicArns() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserAuthorizationRequired`<sup>Required</sup> <a name="UserAuthorizationRequired" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequired"></a>

```go
func UserAuthorizationRequired() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotSlackChannelConfigurationConfig <a name="ChatbotSlackChannelConfigurationConfig" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chatbotslackchannelconfiguration"

&chatbotslackchannelconfiguration.ChatbotSlackChannelConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigurationName: *string,
	IamRoleArn: *string,
	SlackChannelId: *string,
	SlackTeamId: *string,
	GuardrailPolicyArns: *[]*string,
	LoggingLevel: *string,
	SnsTopicArns: *[]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts,
	UserAuthorizationRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName">ConfigurationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId">SlackChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackTeamId">SlackTeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#slack_team_id ChatbotSlackChannelConfiguration#slack_team_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicyArns">GuardrailPolicyArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policy_arns ChatbotSlackChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns">SnsTopicArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userAuthorizationRequired">UserAuthorizationRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#user_authorization_required ChatbotSlackChannelConfiguration#user_authorization_required}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName"></a>

```go
ConfigurationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}.

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}.

---

##### `SlackChannelId`<sup>Required</sup> <a name="SlackChannelId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId"></a>

```go
SlackChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}.

---

##### `SlackTeamId`<sup>Required</sup> <a name="SlackTeamId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackTeamId"></a>

```go
SlackTeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#slack_team_id ChatbotSlackChannelConfiguration#slack_team_id}.

---

##### `GuardrailPolicyArns`<sup>Optional</sup> <a name="GuardrailPolicyArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicyArns"></a>

```go
GuardrailPolicyArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policy_arns ChatbotSlackChannelConfiguration#guardrail_policy_arns}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel"></a>

```go
LoggingLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}.

---

##### `SnsTopicArns`<sup>Optional</sup> <a name="SnsTopicArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns"></a>

```go
SnsTopicArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.timeouts"></a>

```go
Timeouts ChatbotSlackChannelConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#timeouts ChatbotSlackChannelConfiguration#timeouts}

---

##### `UserAuthorizationRequired`<sup>Optional</sup> <a name="UserAuthorizationRequired" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userAuthorizationRequired"></a>

```go
UserAuthorizationRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#user_authorization_required ChatbotSlackChannelConfiguration#user_authorization_required}.

---

### ChatbotSlackChannelConfigurationTimeouts <a name="ChatbotSlackChannelConfigurationTimeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chatbotslackchannelconfiguration"

&chatbotslackchannelconfiguration.ChatbotSlackChannelConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#create ChatbotSlackChannelConfiguration#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#delete ChatbotSlackChannelConfiguration#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chatbot_slack_channel_configuration#update ChatbotSlackChannelConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotSlackChannelConfigurationTimeoutsOutputReference <a name="ChatbotSlackChannelConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chatbotslackchannelconfiguration"

chatbotslackchannelconfiguration.NewChatbotSlackChannelConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChatbotSlackChannelConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



