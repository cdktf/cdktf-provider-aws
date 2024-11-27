# `chatbotTeamsChannelConfiguration` Submodule <a name="`chatbotTeamsChannelConfiguration` Submodule" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotTeamsChannelConfiguration <a name="ChatbotTeamsChannelConfiguration" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration aws_chatbot_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer"></a>

```typescript
import { chatbotTeamsChannelConfiguration } from '@cdktf/provider-aws'

new chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration(scope: Construct, id: string, config: ChatbotTeamsChannelConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig">ChatbotTeamsChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig">ChatbotTeamsChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns">resetGuardrailPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns">resetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName">resetTeamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired">resetUserAuthorizationRequired</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: ChatbotTeamsChannelConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---

##### `resetChannelName` <a name="resetChannelName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName"></a>

```typescript
public resetChannelName(): void
```

##### `resetGuardrailPolicyArns` <a name="resetGuardrailPolicyArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns"></a>

```typescript
public resetGuardrailPolicyArns(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetSnsTopicArns` <a name="resetSnsTopicArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns"></a>

```typescript
public resetSnsTopicArns(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTeamName` <a name="resetTeamName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName"></a>

```typescript
public resetTeamName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserAuthorizationRequired` <a name="resetUserAuthorizationRequired" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired"></a>

```typescript
public resetUserAuthorizationRequired(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct"></a>

```typescript
import { chatbotTeamsChannelConfiguration } from '@cdktf/provider-aws'

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement"></a>

```typescript
import { chatbotTeamsChannelConfiguration } from '@cdktf/provider-aws'

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource"></a>

```typescript
import { chatbotTeamsChannelConfiguration } from '@cdktf/provider-aws'

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport"></a>

```typescript
import { chatbotTeamsChannelConfiguration } from '@cdktf/provider-aws'

chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChatbotTeamsChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChatbotTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChatbotTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn">chatConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput">configurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput">guardrailPolicyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput">snsTopicArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput">teamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput">userAuthorizationRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName">configurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns">guardrailPolicyArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns">snsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName">teamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired">userAuthorizationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `chatConfigurationArn`<sup>Required</sup> <a name="chatConfigurationArn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn"></a>

```typescript
public readonly chatConfigurationArn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: ChatbotTeamsChannelConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a>

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `configurationNameInput`<sup>Optional</sup> <a name="configurationNameInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput"></a>

```typescript
public readonly configurationNameInput: string;
```

- *Type:* string

---

##### `guardrailPolicyArnsInput`<sup>Optional</sup> <a name="guardrailPolicyArnsInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput"></a>

```typescript
public readonly guardrailPolicyArnsInput: string[];
```

- *Type:* string[]

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `snsTopicArnsInput`<sup>Optional</sup> <a name="snsTopicArnsInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput"></a>

```typescript
public readonly snsTopicArnsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `teamNameInput`<sup>Optional</sup> <a name="teamNameInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput"></a>

```typescript
public readonly teamNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChatbotTeamsChannelConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---

##### `userAuthorizationRequiredInput`<sup>Optional</sup> <a name="userAuthorizationRequiredInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput"></a>

```typescript
public readonly userAuthorizationRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

---

##### `guardrailPolicyArns`<sup>Required</sup> <a name="guardrailPolicyArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns"></a>

```typescript
public readonly guardrailPolicyArns: string[];
```

- *Type:* string[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `snsTopicArns`<sup>Required</sup> <a name="snsTopicArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns"></a>

```typescript
public readonly snsTopicArns: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `userAuthorizationRequired`<sup>Required</sup> <a name="userAuthorizationRequired" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired"></a>

```typescript
public readonly userAuthorizationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotTeamsChannelConfigurationConfig <a name="ChatbotTeamsChannelConfigurationConfig" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.Initializer"></a>

```typescript
import { chatbotTeamsChannelConfiguration } from '@cdktf/provider-aws'

const chatbotTeamsChannelConfigurationConfig: chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId">channelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName">configurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName">channelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns">guardrailPolicyArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns">snsTopicArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName">teamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired">userAuthorizationRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}.

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}.

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}.

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}.

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}.

---

##### `guardrailPolicyArns`<sup>Optional</sup> <a name="guardrailPolicyArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns"></a>

```typescript
public readonly guardrailPolicyArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}.

---

##### `snsTopicArns`<sup>Optional</sup> <a name="snsTopicArns" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns"></a>

```typescript
public readonly snsTopicArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}.

---

##### `teamName`<sup>Optional</sup> <a name="teamName" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChatbotTeamsChannelConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#timeouts ChatbotTeamsChannelConfiguration#timeouts}

---

##### `userAuthorizationRequired`<sup>Optional</sup> <a name="userAuthorizationRequired" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired"></a>

```typescript
public readonly userAuthorizationRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}.

---

### ChatbotTeamsChannelConfigurationTimeouts <a name="ChatbotTeamsChannelConfigurationTimeouts" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.Initializer"></a>

```typescript
import { chatbotTeamsChannelConfiguration } from '@cdktf/provider-aws'

const chatbotTeamsChannelConfigurationTimeouts: chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#create ChatbotTeamsChannelConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#delete ChatbotTeamsChannelConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chatbot_teams_channel_configuration#update ChatbotTeamsChannelConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotTeamsChannelConfigurationTimeoutsOutputReference <a name="ChatbotTeamsChannelConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { chatbotTeamsChannelConfiguration } from '@cdktf/provider-aws'

new chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotTeamsChannelConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---



