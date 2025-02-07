# `chatbotSlackChannelConfiguration` Submodule <a name="`chatbotSlackChannelConfiguration` Submodule" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotSlackChannelConfiguration <a name="ChatbotSlackChannelConfiguration" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration aws_chatbot_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer"></a>

```typescript
import { chatbotSlackChannelConfiguration } from '@cdktf/provider-aws'

new chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration(scope: Construct, id: string, config: ChatbotSlackChannelConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig">ChatbotSlackChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig">ChatbotSlackChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicyArns">resetGuardrailPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns">resetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserAuthorizationRequired">resetUserAuthorizationRequired</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: ChatbotSlackChannelConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

---

##### `resetGuardrailPolicyArns` <a name="resetGuardrailPolicyArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicyArns"></a>

```typescript
public resetGuardrailPolicyArns(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetSnsTopicArns` <a name="resetSnsTopicArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns"></a>

```typescript
public resetSnsTopicArns(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserAuthorizationRequired` <a name="resetUserAuthorizationRequired" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserAuthorizationRequired"></a>

```typescript
public resetUserAuthorizationRequired(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct"></a>

```typescript
import { chatbotSlackChannelConfiguration } from '@cdktf/provider-aws'

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement"></a>

```typescript
import { chatbotSlackChannelConfiguration } from '@cdktf/provider-aws'

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource"></a>

```typescript
import { chatbotSlackChannelConfiguration } from '@cdktf/provider-aws'

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport"></a>

```typescript
import { chatbotSlackChannelConfiguration } from '@cdktf/provider-aws'

chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChatbotSlackChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChatbotSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChatbotSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.chatConfigurationArn">chatConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelName">slackChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamName">slackTeamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference">ChatbotSlackChannelConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput">configurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArnsInput">guardrailPolicyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput">slackChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamIdInput">slackTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput">snsTopicArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequiredInput">userAuthorizationRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName">configurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArns">guardrailPolicyArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId">slackChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamId">slackTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns">snsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequired">userAuthorizationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `chatConfigurationArn`<sup>Required</sup> <a name="chatConfigurationArn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.chatConfigurationArn"></a>

```typescript
public readonly chatConfigurationArn: string;
```

- *Type:* string

---

##### `slackChannelName`<sup>Required</sup> <a name="slackChannelName" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelName"></a>

```typescript
public readonly slackChannelName: string;
```

- *Type:* string

---

##### `slackTeamName`<sup>Required</sup> <a name="slackTeamName" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamName"></a>

```typescript
public readonly slackTeamName: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: ChatbotSlackChannelConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference">ChatbotSlackChannelConfigurationTimeoutsOutputReference</a>

---

##### `configurationNameInput`<sup>Optional</sup> <a name="configurationNameInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput"></a>

```typescript
public readonly configurationNameInput: string;
```

- *Type:* string

---

##### `guardrailPolicyArnsInput`<sup>Optional</sup> <a name="guardrailPolicyArnsInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArnsInput"></a>

```typescript
public readonly guardrailPolicyArnsInput: string[];
```

- *Type:* string[]

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `slackChannelIdInput`<sup>Optional</sup> <a name="slackChannelIdInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput"></a>

```typescript
public readonly slackChannelIdInput: string;
```

- *Type:* string

---

##### `slackTeamIdInput`<sup>Optional</sup> <a name="slackTeamIdInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamIdInput"></a>

```typescript
public readonly slackTeamIdInput: string;
```

- *Type:* string

---

##### `snsTopicArnsInput`<sup>Optional</sup> <a name="snsTopicArnsInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput"></a>

```typescript
public readonly snsTopicArnsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChatbotSlackChannelConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

---

##### `userAuthorizationRequiredInput`<sup>Optional</sup> <a name="userAuthorizationRequiredInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequiredInput"></a>

```typescript
public readonly userAuthorizationRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

---

##### `guardrailPolicyArns`<sup>Required</sup> <a name="guardrailPolicyArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArns"></a>

```typescript
public readonly guardrailPolicyArns: string[];
```

- *Type:* string[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `slackChannelId`<sup>Required</sup> <a name="slackChannelId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId"></a>

```typescript
public readonly slackChannelId: string;
```

- *Type:* string

---

##### `slackTeamId`<sup>Required</sup> <a name="slackTeamId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamId"></a>

```typescript
public readonly slackTeamId: string;
```

- *Type:* string

---

##### `snsTopicArns`<sup>Required</sup> <a name="snsTopicArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns"></a>

```typescript
public readonly snsTopicArns: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userAuthorizationRequired`<sup>Required</sup> <a name="userAuthorizationRequired" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequired"></a>

```typescript
public readonly userAuthorizationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotSlackChannelConfigurationConfig <a name="ChatbotSlackChannelConfigurationConfig" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.Initializer"></a>

```typescript
import { chatbotSlackChannelConfiguration } from '@cdktf/provider-aws'

const chatbotSlackChannelConfigurationConfig: chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName">configurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId">slackChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackTeamId">slackTeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#slack_team_id ChatbotSlackChannelConfiguration#slack_team_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicyArns">guardrailPolicyArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policy_arns ChatbotSlackChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns">snsTopicArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userAuthorizationRequired">userAuthorizationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#user_authorization_required ChatbotSlackChannelConfiguration#user_authorization_required}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}.

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}.

---

##### `slackChannelId`<sup>Required</sup> <a name="slackChannelId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId"></a>

```typescript
public readonly slackChannelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}.

---

##### `slackTeamId`<sup>Required</sup> <a name="slackTeamId" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackTeamId"></a>

```typescript
public readonly slackTeamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#slack_team_id ChatbotSlackChannelConfiguration#slack_team_id}.

---

##### `guardrailPolicyArns`<sup>Optional</sup> <a name="guardrailPolicyArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicyArns"></a>

```typescript
public readonly guardrailPolicyArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policy_arns ChatbotSlackChannelConfiguration#guardrail_policy_arns}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}.

---

##### `snsTopicArns`<sup>Optional</sup> <a name="snsTopicArns" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns"></a>

```typescript
public readonly snsTopicArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChatbotSlackChannelConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#timeouts ChatbotSlackChannelConfiguration#timeouts}

---

##### `userAuthorizationRequired`<sup>Optional</sup> <a name="userAuthorizationRequired" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userAuthorizationRequired"></a>

```typescript
public readonly userAuthorizationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#user_authorization_required ChatbotSlackChannelConfiguration#user_authorization_required}.

---

### ChatbotSlackChannelConfigurationTimeouts <a name="ChatbotSlackChannelConfigurationTimeouts" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.Initializer"></a>

```typescript
import { chatbotSlackChannelConfiguration } from '@cdktf/provider-aws'

const chatbotSlackChannelConfigurationTimeouts: chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#create ChatbotSlackChannelConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#delete ChatbotSlackChannelConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/chatbot_slack_channel_configuration#update ChatbotSlackChannelConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotSlackChannelConfigurationTimeoutsOutputReference <a name="ChatbotSlackChannelConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { chatbotSlackChannelConfiguration } from '@cdktf/provider-aws'

new chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotSlackChannelConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

---



