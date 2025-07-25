# `bedrockagentAgent` Submodule <a name="`bedrockagentAgent` Submodule" id="@cdktf/provider-aws.bedrockagentAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgent <a name="BedrockagentAgent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent aws_bedrockagent_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgent(scope: Construct, id: string, config: BedrockagentAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig">BedrockagentAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig">BedrockagentAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putGuardrailConfiguration">putGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putMemoryConfiguration">putMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putPromptOverrideConfiguration">putPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetAgentCollaboration">resetAgentCollaboration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetCustomerEncryptionKeyArn">resetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetGuardrailConfiguration">resetGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetIdleSessionTtlInSeconds">resetIdleSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetMemoryConfiguration">resetMemoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPrepareAgent">resetPrepareAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPromptOverrideConfiguration">resetPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetSkipResourceInUseCheck">resetSkipResourceInUseCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGuardrailConfiguration` <a name="putGuardrailConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putGuardrailConfiguration"></a>

```typescript
public putGuardrailConfiguration(value: IResolvable | BedrockagentAgentGuardrailConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putGuardrailConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>[]

---

##### `putMemoryConfiguration` <a name="putMemoryConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putMemoryConfiguration"></a>

```typescript
public putMemoryConfiguration(value: IResolvable | BedrockagentAgentMemoryConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putMemoryConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>[]

---

##### `putPromptOverrideConfiguration` <a name="putPromptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putPromptOverrideConfiguration"></a>

```typescript
public putPromptOverrideConfiguration(value: IResolvable | BedrockagentAgentPromptOverrideConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putPromptOverrideConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockagentAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>

---

##### `resetAgentCollaboration` <a name="resetAgentCollaboration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetAgentCollaboration"></a>

```typescript
public resetAgentCollaboration(): void
```

##### `resetCustomerEncryptionKeyArn` <a name="resetCustomerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetCustomerEncryptionKeyArn"></a>

```typescript
public resetCustomerEncryptionKeyArn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGuardrailConfiguration` <a name="resetGuardrailConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetGuardrailConfiguration"></a>

```typescript
public resetGuardrailConfiguration(): void
```

##### `resetIdleSessionTtlInSeconds` <a name="resetIdleSessionTtlInSeconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetIdleSessionTtlInSeconds"></a>

```typescript
public resetIdleSessionTtlInSeconds(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetMemoryConfiguration` <a name="resetMemoryConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetMemoryConfiguration"></a>

```typescript
public resetMemoryConfiguration(): void
```

##### `resetPrepareAgent` <a name="resetPrepareAgent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPrepareAgent"></a>

```typescript
public resetPrepareAgent(): void
```

##### `resetPromptOverrideConfiguration` <a name="resetPromptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPromptOverrideConfiguration"></a>

```typescript
public resetPromptOverrideConfiguration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSkipResourceInUseCheck` <a name="resetSkipResourceInUseCheck" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetSkipResourceInUseCheck"></a>

```typescript
public resetSkipResourceInUseCheck(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentAgent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isConstruct"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

bedrockagentAgent.BedrockagentAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformElement"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

bedrockagentAgent.BedrockagentAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformResource"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

bedrockagentAgent.BedrockagentAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

bedrockagentAgent.BedrockagentAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockagentAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentArn">agentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList">BedrockagentAgentGuardrailConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.memoryConfiguration">memoryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList">BedrockagentAgentMemoryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.preparedAt">preparedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfiguration">promptOverrideConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList">BedrockagentAgentPromptOverrideConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference">BedrockagentAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentCollaborationInput">agentCollaborationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentNameInput">agentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArnInput">agentResourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArnInput">customerEncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModelInput">foundationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.guardrailConfigurationInput">guardrailConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSecondsInput">idleSessionTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.memoryConfigurationInput">memoryConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgentInput">prepareAgentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfigurationInput">promptOverrideConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.skipResourceInUseCheckInput">skipResourceInUseCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentCollaboration">agentCollaboration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentName">agentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArn">agentResourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModel">foundationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgent">prepareAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.skipResourceInUseCheck">skipResourceInUseCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentArn`<sup>Required</sup> <a name="agentArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentArn"></a>

```typescript
public readonly agentArn: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `guardrailConfiguration`<sup>Required</sup> <a name="guardrailConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.guardrailConfiguration"></a>

```typescript
public readonly guardrailConfiguration: BedrockagentAgentGuardrailConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList">BedrockagentAgentGuardrailConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memoryConfiguration`<sup>Required</sup> <a name="memoryConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.memoryConfiguration"></a>

```typescript
public readonly memoryConfiguration: BedrockagentAgentMemoryConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList">BedrockagentAgentMemoryConfigurationList</a>

---

##### `preparedAt`<sup>Required</sup> <a name="preparedAt" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.preparedAt"></a>

```typescript
public readonly preparedAt: string;
```

- *Type:* string

---

##### `promptOverrideConfiguration`<sup>Required</sup> <a name="promptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfiguration"></a>

```typescript
public readonly promptOverrideConfiguration: BedrockagentAgentPromptOverrideConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList">BedrockagentAgentPromptOverrideConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference">BedrockagentAgentTimeoutsOutputReference</a>

---

##### `agentCollaborationInput`<sup>Optional</sup> <a name="agentCollaborationInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentCollaborationInput"></a>

```typescript
public readonly agentCollaborationInput: string;
```

- *Type:* string

---

##### `agentNameInput`<sup>Optional</sup> <a name="agentNameInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentNameInput"></a>

```typescript
public readonly agentNameInput: string;
```

- *Type:* string

---

##### `agentResourceRoleArnInput`<sup>Optional</sup> <a name="agentResourceRoleArnInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArnInput"></a>

```typescript
public readonly agentResourceRoleArnInput: string;
```

- *Type:* string

---

##### `customerEncryptionKeyArnInput`<sup>Optional</sup> <a name="customerEncryptionKeyArnInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArnInput"></a>

```typescript
public readonly customerEncryptionKeyArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `foundationModelInput`<sup>Optional</sup> <a name="foundationModelInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModelInput"></a>

```typescript
public readonly foundationModelInput: string;
```

- *Type:* string

---

##### `guardrailConfigurationInput`<sup>Optional</sup> <a name="guardrailConfigurationInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.guardrailConfigurationInput"></a>

```typescript
public readonly guardrailConfigurationInput: IResolvable | BedrockagentAgentGuardrailConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>[]

---

##### `idleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="idleSessionTtlInSecondsInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSecondsInput"></a>

```typescript
public readonly idleSessionTtlInSecondsInput: number;
```

- *Type:* number

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `memoryConfigurationInput`<sup>Optional</sup> <a name="memoryConfigurationInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.memoryConfigurationInput"></a>

```typescript
public readonly memoryConfigurationInput: IResolvable | BedrockagentAgentMemoryConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>[]

---

##### `prepareAgentInput`<sup>Optional</sup> <a name="prepareAgentInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgentInput"></a>

```typescript
public readonly prepareAgentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `promptOverrideConfigurationInput`<sup>Optional</sup> <a name="promptOverrideConfigurationInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfigurationInput"></a>

```typescript
public readonly promptOverrideConfigurationInput: IResolvable | BedrockagentAgentPromptOverrideConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `skipResourceInUseCheckInput`<sup>Optional</sup> <a name="skipResourceInUseCheckInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.skipResourceInUseCheckInput"></a>

```typescript
public readonly skipResourceInUseCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockagentAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>

---

##### `agentCollaboration`<sup>Required</sup> <a name="agentCollaboration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentCollaboration"></a>

```typescript
public readonly agentCollaboration: string;
```

- *Type:* string

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentName"></a>

```typescript
public readonly agentName: string;
```

- *Type:* string

---

##### `agentResourceRoleArn`<sup>Required</sup> <a name="agentResourceRoleArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArn"></a>

```typescript
public readonly agentResourceRoleArn: string;
```

- *Type:* string

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArn"></a>

```typescript
public readonly customerEncryptionKeyArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `foundationModel`<sup>Required</sup> <a name="foundationModel" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModel"></a>

```typescript
public readonly foundationModel: string;
```

- *Type:* string

---

##### `idleSessionTtlInSeconds`<sup>Required</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSeconds"></a>

```typescript
public readonly idleSessionTtlInSeconds: number;
```

- *Type:* number

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `prepareAgent`<sup>Required</sup> <a name="prepareAgent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgent"></a>

```typescript
public readonly prepareAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `skipResourceInUseCheck`<sup>Required</sup> <a name="skipResourceInUseCheck" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.skipResourceInUseCheck"></a>

```typescript
public readonly skipResourceInUseCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentConfig <a name="BedrockagentAgentConfig" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

const bedrockagentAgentConfig: bedrockagentAgent.BedrockagentAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentName">agentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentResourceRoleArn">agentResourceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.foundationModel">foundationModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentCollaboration">agentCollaboration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#agent_collaboration BedrockagentAgent#agent_collaboration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#guardrail_configuration BedrockagentAgent#guardrail_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.instruction">instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.memoryConfiguration">memoryConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#memory_configuration BedrockagentAgent#memory_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.prepareAgent">prepareAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.promptOverrideConfiguration">promptOverrideConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.skipResourceInUseCheck">skipResourceInUseCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#skip_resource_in_use_check BedrockagentAgent#skip_resource_in_use_check}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentName"></a>

```typescript
public readonly agentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}.

---

##### `agentResourceRoleArn`<sup>Required</sup> <a name="agentResourceRoleArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentResourceRoleArn"></a>

```typescript
public readonly agentResourceRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}.

---

##### `foundationModel`<sup>Required</sup> <a name="foundationModel" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.foundationModel"></a>

```typescript
public readonly foundationModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}.

---

##### `agentCollaboration`<sup>Optional</sup> <a name="agentCollaboration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentCollaboration"></a>

```typescript
public readonly agentCollaboration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#agent_collaboration BedrockagentAgent#agent_collaboration}.

---

##### `customerEncryptionKeyArn`<sup>Optional</sup> <a name="customerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.customerEncryptionKeyArn"></a>

```typescript
public readonly customerEncryptionKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}.

---

##### `guardrailConfiguration`<sup>Optional</sup> <a name="guardrailConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.guardrailConfiguration"></a>

```typescript
public readonly guardrailConfiguration: IResolvable | BedrockagentAgentGuardrailConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#guardrail_configuration BedrockagentAgent#guardrail_configuration}.

---

##### `idleSessionTtlInSeconds`<sup>Optional</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.idleSessionTtlInSeconds"></a>

```typescript
public readonly idleSessionTtlInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}.

---

##### `memoryConfiguration`<sup>Optional</sup> <a name="memoryConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.memoryConfiguration"></a>

```typescript
public readonly memoryConfiguration: IResolvable | BedrockagentAgentMemoryConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#memory_configuration BedrockagentAgent#memory_configuration}.

---

##### `prepareAgent`<sup>Optional</sup> <a name="prepareAgent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.prepareAgent"></a>

```typescript
public readonly prepareAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}.

---

##### `promptOverrideConfiguration`<sup>Optional</sup> <a name="promptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.promptOverrideConfiguration"></a>

```typescript
public readonly promptOverrideConfiguration: IResolvable | BedrockagentAgentPromptOverrideConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#region BedrockagentAgent#region}

---

##### `skipResourceInUseCheck`<sup>Optional</sup> <a name="skipResourceInUseCheck" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.skipResourceInUseCheck"></a>

```typescript
public readonly skipResourceInUseCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#skip_resource_in_use_check BedrockagentAgent#skip_resource_in_use_check}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentAgentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#timeouts BedrockagentAgent#timeouts}

---

### BedrockagentAgentGuardrailConfiguration <a name="BedrockagentAgentGuardrailConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

const bedrockagentAgentGuardrailConfiguration: bedrockagentAgent.BedrockagentAgentGuardrailConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#guardrail_identifier BedrockagentAgent#guardrail_identifier}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.property.guardrailVersion">guardrailVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#guardrail_version BedrockagentAgent#guardrail_version}. |

---

##### `guardrailIdentifier`<sup>Optional</sup> <a name="guardrailIdentifier" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.property.guardrailIdentifier"></a>

```typescript
public readonly guardrailIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#guardrail_identifier BedrockagentAgent#guardrail_identifier}.

---

##### `guardrailVersion`<sup>Optional</sup> <a name="guardrailVersion" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration.property.guardrailVersion"></a>

```typescript
public readonly guardrailVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#guardrail_version BedrockagentAgent#guardrail_version}.

---

### BedrockagentAgentMemoryConfiguration <a name="BedrockagentAgentMemoryConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

const bedrockagentAgentMemoryConfiguration: bedrockagentAgent.BedrockagentAgentMemoryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.property.enabledMemoryTypes">enabledMemoryTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#enabled_memory_types BedrockagentAgent#enabled_memory_types}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.property.storageDays">storageDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#storage_days BedrockagentAgent#storage_days}. |

---

##### `enabledMemoryTypes`<sup>Optional</sup> <a name="enabledMemoryTypes" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.property.enabledMemoryTypes"></a>

```typescript
public readonly enabledMemoryTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#enabled_memory_types BedrockagentAgent#enabled_memory_types}.

---

##### `storageDays`<sup>Optional</sup> <a name="storageDays" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration.property.storageDays"></a>

```typescript
public readonly storageDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#storage_days BedrockagentAgent#storage_days}.

---

### BedrockagentAgentPromptOverrideConfiguration <a name="BedrockagentAgentPromptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

const bedrockagentAgentPromptOverrideConfiguration: bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.overrideLambda">overrideLambda</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#override_lambda BedrockagentAgent#override_lambda}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.promptConfigurations">promptConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_configurations BedrockagentAgent#prompt_configurations}. |

---

##### `overrideLambda`<sup>Optional</sup> <a name="overrideLambda" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.overrideLambda"></a>

```typescript
public readonly overrideLambda: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#override_lambda BedrockagentAgent#override_lambda}.

---

##### `promptConfigurations`<sup>Optional</sup> <a name="promptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.promptConfigurations"></a>

```typescript
public readonly promptConfigurations: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_configurations BedrockagentAgent#prompt_configurations}.

---

### BedrockagentAgentPromptOverrideConfigurationPromptConfigurations <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

const bedrockagentAgentPromptOverrideConfigurationPromptConfigurations: bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate">basePromptTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#base_prompt_template BedrockagentAgent#base_prompt_template}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#inference_configuration BedrockagentAgent#inference_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode">parserMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#parser_mode BedrockagentAgent#parser_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode">promptCreationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_creation_mode BedrockagentAgent#prompt_creation_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptState">promptState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_state BedrockagentAgent#prompt_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptType">promptType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_type BedrockagentAgent#prompt_type}. |

---

##### `basePromptTemplate`<sup>Optional</sup> <a name="basePromptTemplate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate"></a>

```typescript
public readonly basePromptTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#base_prompt_template BedrockagentAgent#base_prompt_template}.

---

##### `inferenceConfiguration`<sup>Optional</sup> <a name="inferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration"></a>

```typescript
public readonly inferenceConfiguration: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#inference_configuration BedrockagentAgent#inference_configuration}.

---

##### `parserMode`<sup>Optional</sup> <a name="parserMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode"></a>

```typescript
public readonly parserMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#parser_mode BedrockagentAgent#parser_mode}.

---

##### `promptCreationMode`<sup>Optional</sup> <a name="promptCreationMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode"></a>

```typescript
public readonly promptCreationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_creation_mode BedrockagentAgent#prompt_creation_mode}.

---

##### `promptState`<sup>Optional</sup> <a name="promptState" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptState"></a>

```typescript
public readonly promptState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_state BedrockagentAgent#prompt_state}.

---

##### `promptType`<sup>Optional</sup> <a name="promptType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptType"></a>

```typescript
public readonly promptType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#prompt_type BedrockagentAgent#prompt_type}.

---

### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

const bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration: bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maxLength">maxLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#max_length BedrockagentAgent#max_length}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences">stopSequences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#stop_sequences BedrockagentAgent#stop_sequences}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature">temperature</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#temperature BedrockagentAgent#temperature}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK">topK</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#top_k BedrockagentAgent#top_k}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP">topP</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#top_p BedrockagentAgent#top_p}. |

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#max_length BedrockagentAgent#max_length}.

---

##### `stopSequences`<sup>Optional</sup> <a name="stopSequences" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences"></a>

```typescript
public readonly stopSequences: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#stop_sequences BedrockagentAgent#stop_sequences}.

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#temperature BedrockagentAgent#temperature}.

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#top_k BedrockagentAgent#top_k}.

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#top_p BedrockagentAgent#top_p}.

---

### BedrockagentAgentTimeouts <a name="BedrockagentAgentTimeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

const bedrockagentAgentTimeouts: bedrockagentAgent.BedrockagentAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#create BedrockagentAgent#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#delete BedrockagentAgent#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/bedrockagent_agent#update BedrockagentAgent#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentGuardrailConfigurationList <a name="BedrockagentAgentGuardrailConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentAgentGuardrailConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentGuardrailConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>[]

---


### BedrockagentAgentGuardrailConfigurationOutputReference <a name="BedrockagentAgentGuardrailConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier">resetGuardrailIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resetGuardrailVersion">resetGuardrailVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGuardrailIdentifier` <a name="resetGuardrailIdentifier" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resetGuardrailIdentifier"></a>

```typescript
public resetGuardrailIdentifier(): void
```

##### `resetGuardrailVersion` <a name="resetGuardrailVersion" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.resetGuardrailVersion"></a>

```typescript
public resetGuardrailVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput">guardrailIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput">guardrailVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailVersion">guardrailVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guardrailIdentifierInput`<sup>Optional</sup> <a name="guardrailIdentifierInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailIdentifierInput"></a>

```typescript
public readonly guardrailIdentifierInput: string;
```

- *Type:* string

---

##### `guardrailVersionInput`<sup>Optional</sup> <a name="guardrailVersionInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailVersionInput"></a>

```typescript
public readonly guardrailVersionInput: string;
```

- *Type:* string

---

##### `guardrailIdentifier`<sup>Required</sup> <a name="guardrailIdentifier" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```typescript
public readonly guardrailIdentifier: string;
```

- *Type:* string

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```typescript
public readonly guardrailVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentGuardrailConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentGuardrailConfiguration">BedrockagentAgentGuardrailConfiguration</a>

---


### BedrockagentAgentMemoryConfigurationList <a name="BedrockagentAgentMemoryConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentMemoryConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentAgentMemoryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentMemoryConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>[]

---


### BedrockagentAgentMemoryConfigurationOutputReference <a name="BedrockagentAgentMemoryConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes">resetEnabledMemoryTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resetStorageDays">resetStorageDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabledMemoryTypes` <a name="resetEnabledMemoryTypes" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resetEnabledMemoryTypes"></a>

```typescript
public resetEnabledMemoryTypes(): void
```

##### `resetStorageDays` <a name="resetStorageDays" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.resetStorageDays"></a>

```typescript
public resetStorageDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput">enabledMemoryTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.storageDaysInput">storageDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes">enabledMemoryTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.storageDays">storageDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledMemoryTypesInput`<sup>Optional</sup> <a name="enabledMemoryTypesInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.enabledMemoryTypesInput"></a>

```typescript
public readonly enabledMemoryTypesInput: string[];
```

- *Type:* string[]

---

##### `storageDaysInput`<sup>Optional</sup> <a name="storageDaysInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.storageDaysInput"></a>

```typescript
public readonly storageDaysInput: number;
```

- *Type:* number

---

##### `enabledMemoryTypes`<sup>Required</sup> <a name="enabledMemoryTypes" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.enabledMemoryTypes"></a>

```typescript
public readonly enabledMemoryTypes: string[];
```

- *Type:* string[]

---

##### `storageDays`<sup>Required</sup> <a name="storageDays" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.storageDays"></a>

```typescript
public readonly storageDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentMemoryConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentMemoryConfiguration">BedrockagentAgentMemoryConfiguration</a>

---


### BedrockagentAgentPromptOverrideConfigurationList <a name="BedrockagentAgentPromptOverrideConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentAgentPromptOverrideConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentPromptOverrideConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>[]

---


### BedrockagentAgentPromptOverrideConfigurationOutputReference <a name="BedrockagentAgentPromptOverrideConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations">putPromptConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda">resetOverrideLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations">resetPromptConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromptConfigurations` <a name="putPromptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations"></a>

```typescript
public putPromptConfigurations(value: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>[]

---

##### `resetOverrideLambda` <a name="resetOverrideLambda" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda"></a>

```typescript
public resetOverrideLambda(): void
```

##### `resetPromptConfigurations` <a name="resetPromptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations"></a>

```typescript
public resetPromptConfigurations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations">promptConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput">overrideLambdaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput">promptConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambda">overrideLambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `promptConfigurations`<sup>Required</sup> <a name="promptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations"></a>

```typescript
public readonly promptConfigurations: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList</a>

---

##### `overrideLambdaInput`<sup>Optional</sup> <a name="overrideLambdaInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput"></a>

```typescript
public readonly overrideLambdaInput: string;
```

- *Type:* string

---

##### `promptConfigurationsInput`<sup>Optional</sup> <a name="promptConfigurationsInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput"></a>

```typescript
public readonly promptConfigurationsInput: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>[]

---

##### `overrideLambda`<sup>Required</sup> <a name="overrideLambda" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambda"></a>

```typescript
public readonly overrideLambda: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentPromptOverrideConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration">BedrockagentAgentPromptOverrideConfiguration</a>

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>[]

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences">resetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK">resetTopK</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetStopSequences` <a name="resetStopSequences" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences"></a>

```typescript
public resetStopSequences(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```

##### `resetTopK` <a name="resetTopK" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK"></a>

```typescript
public resetTopK(): void
```

##### `resetTopP` <a name="resetTopP" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP"></a>

```typescript
public resetTopP(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLengthInput">maxLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput">stopSequencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput">topKInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput">topPInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences">stopSequences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK">topK</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP">topP</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: number;
```

- *Type:* number

---

##### `stopSequencesInput`<sup>Optional</sup> <a name="stopSequencesInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput"></a>

```typescript
public readonly stopSequencesInput: string[];
```

- *Type:* string[]

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput"></a>

```typescript
public readonly topKInput: number;
```

- *Type:* number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput"></a>

```typescript
public readonly topPInput: number;
```

- *Type:* number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences"></a>

```typescript
public readonly stopSequences: string[];
```

- *Type:* string[]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK"></a>

```typescript
public readonly topK: number;
```

- *Type:* number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP"></a>

```typescript
public readonly topP: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.get"></a>

```typescript
public get(index: number): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>[]

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration">putInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate">resetBasePromptTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration">resetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode">resetParserMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode">resetPromptCreationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState">resetPromptState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType">resetPromptType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInferenceConfiguration` <a name="putInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration"></a>

```typescript
public putInferenceConfiguration(value: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>[]

---

##### `resetBasePromptTemplate` <a name="resetBasePromptTemplate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate"></a>

```typescript
public resetBasePromptTemplate(): void
```

##### `resetInferenceConfiguration` <a name="resetInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration"></a>

```typescript
public resetInferenceConfiguration(): void
```

##### `resetParserMode` <a name="resetParserMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode"></a>

```typescript
public resetParserMode(): void
```

##### `resetPromptCreationMode` <a name="resetPromptCreationMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode"></a>

```typescript
public resetPromptCreationMode(): void
```

##### `resetPromptState` <a name="resetPromptState" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState"></a>

```typescript
public resetPromptState(): void
```

##### `resetPromptType` <a name="resetPromptType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType"></a>

```typescript
public resetPromptType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput">basePromptTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput">inferenceConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput">parserModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput">promptCreationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput">promptStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput">promptTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate">basePromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode">parserMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode">promptCreationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState">promptState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType">promptType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inferenceConfiguration`<sup>Required</sup> <a name="inferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration"></a>

```typescript
public readonly inferenceConfiguration: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList</a>

---

##### `basePromptTemplateInput`<sup>Optional</sup> <a name="basePromptTemplateInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput"></a>

```typescript
public readonly basePromptTemplateInput: string;
```

- *Type:* string

---

##### `inferenceConfigurationInput`<sup>Optional</sup> <a name="inferenceConfigurationInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput"></a>

```typescript
public readonly inferenceConfigurationInput: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration</a>[]

---

##### `parserModeInput`<sup>Optional</sup> <a name="parserModeInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput"></a>

```typescript
public readonly parserModeInput: string;
```

- *Type:* string

---

##### `promptCreationModeInput`<sup>Optional</sup> <a name="promptCreationModeInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput"></a>

```typescript
public readonly promptCreationModeInput: string;
```

- *Type:* string

---

##### `promptStateInput`<sup>Optional</sup> <a name="promptStateInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput"></a>

```typescript
public readonly promptStateInput: string;
```

- *Type:* string

---

##### `promptTypeInput`<sup>Optional</sup> <a name="promptTypeInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput"></a>

```typescript
public readonly promptTypeInput: string;
```

- *Type:* string

---

##### `basePromptTemplate`<sup>Required</sup> <a name="basePromptTemplate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate"></a>

```typescript
public readonly basePromptTemplate: string;
```

- *Type:* string

---

##### `parserMode`<sup>Required</sup> <a name="parserMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode"></a>

```typescript
public readonly parserMode: string;
```

- *Type:* string

---

##### `promptCreationMode`<sup>Required</sup> <a name="promptCreationMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode"></a>

```typescript
public readonly promptCreationMode: string;
```

- *Type:* string

---

##### `promptState`<sup>Required</sup> <a name="promptState" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState"></a>

```typescript
public readonly promptState: string;
```

- *Type:* string

---

##### `promptType`<sup>Required</sup> <a name="promptType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType"></a>

```typescript
public readonly promptType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations">BedrockagentAgentPromptOverrideConfigurationPromptConfigurations</a>

---


### BedrockagentAgentTimeoutsOutputReference <a name="BedrockagentAgentTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgent } from '@cdktf/provider-aws'

new bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>

---



