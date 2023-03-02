# `lexIntent` Submodule <a name="`lexIntent` Submodule" id="@cdktf/provider-aws.lexIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexIntent <a name="LexIntent" id="@cdktf/provider-aws.lexIntent.LexIntent"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent aws_lex_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntent(scope: Construct, id: string, config: LexIntentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig">LexIntentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig">LexIntentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement">putConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt">putConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook">putDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt">putFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity">putFulfillmentActivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement">putRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putSlot">putSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetConclusionStatement">resetConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetConfirmationPrompt">resetConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetCreateVersion">resetCreateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetDialogCodeHook">resetDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetFollowUpPrompt">resetFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetParentIntentSignature">resetParentIntentSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetRejectionStatement">resetRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetSampleUtterances">resetSampleUtterances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetSlot">resetSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lexIntent.LexIntent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lexIntent.LexIntent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lexIntent.LexIntent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConclusionStatement` <a name="putConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement"></a>

```typescript
public putConclusionStatement(value: LexIntentConclusionStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---

##### `putConfirmationPrompt` <a name="putConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt"></a>

```typescript
public putConfirmationPrompt(value: LexIntentConfirmationPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---

##### `putDialogCodeHook` <a name="putDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook"></a>

```typescript
public putDialogCodeHook(value: LexIntentDialogCodeHook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---

##### `putFollowUpPrompt` <a name="putFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt"></a>

```typescript
public putFollowUpPrompt(value: LexIntentFollowUpPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---

##### `putFulfillmentActivity` <a name="putFulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity"></a>

```typescript
public putFulfillmentActivity(value: LexIntentFulfillmentActivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---

##### `putRejectionStatement` <a name="putRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement"></a>

```typescript
public putRejectionStatement(value: LexIntentRejectionStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---

##### `putSlot` <a name="putSlot" id="@cdktf/provider-aws.lexIntent.LexIntent.putSlot"></a>

```typescript
public putSlot(value: IResolvable | LexIntentSlot[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putSlot.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts"></a>

```typescript
public putTimeouts(value: LexIntentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

---

##### `resetConclusionStatement` <a name="resetConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.resetConclusionStatement"></a>

```typescript
public resetConclusionStatement(): void
```

##### `resetConfirmationPrompt` <a name="resetConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.resetConfirmationPrompt"></a>

```typescript
public resetConfirmationPrompt(): void
```

##### `resetCreateVersion` <a name="resetCreateVersion" id="@cdktf/provider-aws.lexIntent.LexIntent.resetCreateVersion"></a>

```typescript
public resetCreateVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexIntent.LexIntent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDialogCodeHook` <a name="resetDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.resetDialogCodeHook"></a>

```typescript
public resetDialogCodeHook(): void
```

##### `resetFollowUpPrompt` <a name="resetFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.resetFollowUpPrompt"></a>

```typescript
public resetFollowUpPrompt(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lexIntent.LexIntent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParentIntentSignature` <a name="resetParentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntent.resetParentIntentSignature"></a>

```typescript
public resetParentIntentSignature(): void
```

##### `resetRejectionStatement` <a name="resetRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.resetRejectionStatement"></a>

```typescript
public resetRejectionStatement(): void
```

##### `resetSampleUtterances` <a name="resetSampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntent.resetSampleUtterances"></a>

```typescript
public resetSampleUtterances(): void
```

##### `resetSlot` <a name="resetSlot" id="@cdktf/provider-aws.lexIntent.LexIntent.resetSlot"></a>

```typescript
public resetSlot(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lexIntent.LexIntent.isConstruct"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

lexIntent.LexIntent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexIntent.LexIntent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

lexIntent.LexIntent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

lexIntent.LexIntent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatement">conclusionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPrompt">confirmationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHook">dialogCodeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPrompt">followUpPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivity">fulfillmentActivity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.slot">slot</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList">LexIntentSlotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatementInput">conclusionStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPromptInput">confirmationPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createVersionInput">createVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHookInput">dialogCodeHookInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPromptInput">followUpPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivityInput">fulfillmentActivityInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignatureInput">parentIntentSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatementInput">rejectionStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterancesInput">sampleUtterancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.slotInput">slotInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createVersion">createVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignature">parentIntentSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterances">sampleUtterances</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lexIntent.LexIntent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lexIntent.LexIntent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lexIntent.LexIntent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexIntent.LexIntent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexIntent.LexIntent.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexIntent.LexIntent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexIntent.LexIntent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexIntent.LexIntent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/provider-aws.lexIntent.LexIntent.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `conclusionStatement`<sup>Required</sup> <a name="conclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatement"></a>

```typescript
public readonly conclusionStatement: LexIntentConclusionStatementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a>

---

##### `confirmationPrompt`<sup>Required</sup> <a name="confirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPrompt"></a>

```typescript
public readonly confirmationPrompt: LexIntentConfirmationPromptOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `dialogCodeHook`<sup>Required</sup> <a name="dialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHook"></a>

```typescript
public readonly dialogCodeHook: LexIntentDialogCodeHookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a>

---

##### `followUpPrompt`<sup>Required</sup> <a name="followUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPrompt"></a>

```typescript
public readonly followUpPrompt: LexIntentFollowUpPromptOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a>

---

##### `fulfillmentActivity`<sup>Required</sup> <a name="fulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivity"></a>

```typescript
public readonly fulfillmentActivity: LexIntentFulfillmentActivityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a>

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.lexIntent.LexIntent.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `rejectionStatement`<sup>Required</sup> <a name="rejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatement"></a>

```typescript
public readonly rejectionStatement: LexIntentRejectionStatementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a>

---

##### `slot`<sup>Required</sup> <a name="slot" id="@cdktf/provider-aws.lexIntent.LexIntent.property.slot"></a>

```typescript
public readonly slot: LexIntentSlotList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList">LexIntentSlotList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.property.timeouts"></a>

```typescript
public readonly timeouts: LexIntentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lexIntent.LexIntent.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `conclusionStatementInput`<sup>Optional</sup> <a name="conclusionStatementInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatementInput"></a>

```typescript
public readonly conclusionStatementInput: LexIntentConclusionStatement;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---

##### `confirmationPromptInput`<sup>Optional</sup> <a name="confirmationPromptInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPromptInput"></a>

```typescript
public readonly confirmationPromptInput: LexIntentConfirmationPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---

##### `createVersionInput`<sup>Optional</sup> <a name="createVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createVersionInput"></a>

```typescript
public readonly createVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dialogCodeHookInput`<sup>Optional</sup> <a name="dialogCodeHookInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHookInput"></a>

```typescript
public readonly dialogCodeHookInput: LexIntentDialogCodeHook;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---

##### `followUpPromptInput`<sup>Optional</sup> <a name="followUpPromptInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPromptInput"></a>

```typescript
public readonly followUpPromptInput: LexIntentFollowUpPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---

##### `fulfillmentActivityInput`<sup>Optional</sup> <a name="fulfillmentActivityInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivityInput"></a>

```typescript
public readonly fulfillmentActivityInput: LexIntentFulfillmentActivity;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIntentSignatureInput`<sup>Optional</sup> <a name="parentIntentSignatureInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignatureInput"></a>

```typescript
public readonly parentIntentSignatureInput: string;
```

- *Type:* string

---

##### `rejectionStatementInput`<sup>Optional</sup> <a name="rejectionStatementInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatementInput"></a>

```typescript
public readonly rejectionStatementInput: LexIntentRejectionStatement;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---

##### `sampleUtterancesInput`<sup>Optional</sup> <a name="sampleUtterancesInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterancesInput"></a>

```typescript
public readonly sampleUtterancesInput: string[];
```

- *Type:* string[]

---

##### `slotInput`<sup>Optional</sup> <a name="slotInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.slotInput"></a>

```typescript
public readonly slotInput: IResolvable | LexIntentSlot[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LexIntentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> | cdktf.IResolvable

---

##### `createVersion`<sup>Required</sup> <a name="createVersion" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createVersion"></a>

```typescript
public readonly createVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentIntentSignature`<sup>Required</sup> <a name="parentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignature"></a>

```typescript
public readonly parentIntentSignature: string;
```

- *Type:* string

---

##### `sampleUtterances`<sup>Required</sup> <a name="sampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterances"></a>

```typescript
public readonly sampleUtterances: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lexIntent.LexIntent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LexIntentConclusionStatement <a name="LexIntentConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentConclusionStatement: lexIntent.LexIntentConclusionStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentConclusionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConclusionStatementMessage <a name="LexIntentConclusionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentConclusionStatementMessage: lexIntent.LexIntentConclusionStatementMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentConfig <a name="LexIntentConfig" id="@cdktf/provider-aws.lexIntent.LexIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentConfig: lexIntent.LexIntentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.fulfillmentActivity">fulfillmentActivity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | fulfillment_activity block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.conclusionStatement">conclusionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | conclusion_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.confirmationPrompt">confirmationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | confirmation_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.createVersion">createVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dialogCodeHook">dialogCodeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | dialog_code_hook block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.followUpPrompt">followUpPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | follow_up_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.parentIntentSignature">parentIntentSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | rejection_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.sampleUtterances">sampleUtterances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.slot">slot</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>[]</code> | slot block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fulfillmentActivity`<sup>Required</sup> <a name="fulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.fulfillmentActivity"></a>

```typescript
public readonly fulfillmentActivity: LexIntentFulfillmentActivity;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

fulfillment_activity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#fulfillment_activity LexIntent#fulfillment_activity}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `conclusionStatement`<sup>Optional</sup> <a name="conclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.conclusionStatement"></a>

```typescript
public readonly conclusionStatement: LexIntentConclusionStatement;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

conclusion_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#conclusion_statement LexIntent#conclusion_statement}

---

##### `confirmationPrompt`<sup>Optional</sup> <a name="confirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.confirmationPrompt"></a>

```typescript
public readonly confirmationPrompt: LexIntentConfirmationPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

confirmation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#confirmation_prompt LexIntent#confirmation_prompt}

---

##### `createVersion`<sup>Optional</sup> <a name="createVersion" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.createVersion"></a>

```typescript
public readonly createVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `dialogCodeHook`<sup>Optional</sup> <a name="dialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dialogCodeHook"></a>

```typescript
public readonly dialogCodeHook: LexIntentDialogCodeHook;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

dialog_code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#dialog_code_hook LexIntent#dialog_code_hook}

---

##### `followUpPrompt`<sup>Optional</sup> <a name="followUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.followUpPrompt"></a>

```typescript
public readonly followUpPrompt: LexIntentFollowUpPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

follow_up_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#follow_up_prompt LexIntent#follow_up_prompt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentIntentSignature`<sup>Optional</sup> <a name="parentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.parentIntentSignature"></a>

```typescript
public readonly parentIntentSignature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}.

---

##### `rejectionStatement`<sup>Optional</sup> <a name="rejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.rejectionStatement"></a>

```typescript
public readonly rejectionStatement: LexIntentRejectionStatement;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

##### `sampleUtterances`<sup>Optional</sup> <a name="sampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.sampleUtterances"></a>

```typescript
public readonly sampleUtterances: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slot`<sup>Optional</sup> <a name="slot" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.slot"></a>

```typescript
public readonly slot: IResolvable | LexIntentSlot[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>[]

slot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot LexIntent#slot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LexIntentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#timeouts LexIntent#timeouts}

---

### LexIntentConfirmationPrompt <a name="LexIntentConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentConfirmationPrompt: lexIntent.LexIntentConfirmationPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentConfirmationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConfirmationPromptMessage <a name="LexIntentConfirmationPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentConfirmationPromptMessage: lexIntent.LexIntentConfirmationPromptMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentDialogCodeHook <a name="LexIntentDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentDialogCodeHook: lexIntent.LexIntentDialogCodeHook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.messageVersion">messageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}. |

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.messageVersion"></a>

```typescript
public readonly messageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

### LexIntentFollowUpPrompt <a name="LexIntentFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentFollowUpPrompt: lexIntent.LexIntentFollowUpPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.prompt">prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | rejection_statement block. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.prompt"></a>

```typescript
public readonly prompt: LexIntentFollowUpPromptPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#prompt LexIntent#prompt}

---

##### `rejectionStatement`<sup>Required</sup> <a name="rejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement"></a>

```typescript
public readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatement;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

### LexIntentFollowUpPromptPrompt <a name="LexIntentFollowUpPromptPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentFollowUpPromptPrompt: lexIntent.LexIntentFollowUpPromptPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentFollowUpPromptPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptPromptMessage <a name="LexIntentFollowUpPromptPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentFollowUpPromptPromptMessage: lexIntent.LexIntentFollowUpPromptPromptMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFollowUpPromptRejectionStatement <a name="LexIntentFollowUpPromptRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentFollowUpPromptRejectionStatement: lexIntent.LexIntentFollowUpPromptRejectionStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentFollowUpPromptRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptRejectionStatementMessage <a name="LexIntentFollowUpPromptRejectionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentFollowUpPromptRejectionStatementMessage: lexIntent.LexIntentFollowUpPromptRejectionStatementMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFulfillmentActivity <a name="LexIntentFulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentFulfillmentActivity: lexIntent.LexIntentFulfillmentActivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.codeHook">codeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | code_hook block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}.

---

##### `codeHook`<sup>Optional</sup> <a name="codeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.codeHook"></a>

```typescript
public readonly codeHook: LexIntentFulfillmentActivityCodeHook;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#code_hook LexIntent#code_hook}

---

### LexIntentFulfillmentActivityCodeHook <a name="LexIntentFulfillmentActivityCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentFulfillmentActivityCodeHook: lexIntent.LexIntentFulfillmentActivityCodeHook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion">messageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}. |

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion"></a>

```typescript
public readonly messageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

### LexIntentRejectionStatement <a name="LexIntentRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentRejectionStatement: lexIntent.LexIntentRejectionStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentRejectionStatementMessage <a name="LexIntentRejectionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentRejectionStatementMessage: lexIntent.LexIntentRejectionStatementMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentSlot <a name="LexIntentSlot" id="@cdktf/provider-aws.lexIntent.LexIntentSlot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentSlot: lexIntent.LexIntentSlot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotConstraint">slotConstraint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_constraint LexIntent#slot_constraint}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotType">slotType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type LexIntent#slot_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#priority LexIntent#priority}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.sampleUtterances">sampleUtterances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotTypeVersion">slotTypeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type_version LexIntent#slot_type_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.valueElicitationPrompt">valueElicitationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | value_elicitation_prompt block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `slotConstraint`<sup>Required</sup> <a name="slotConstraint" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotConstraint"></a>

```typescript
public readonly slotConstraint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_constraint LexIntent#slot_constraint}.

---

##### `slotType`<sup>Required</sup> <a name="slotType" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotType"></a>

```typescript
public readonly slotType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type LexIntent#slot_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#priority LexIntent#priority}.

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

##### `sampleUtterances`<sup>Optional</sup> <a name="sampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.sampleUtterances"></a>

```typescript
public readonly sampleUtterances: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slotTypeVersion`<sup>Optional</sup> <a name="slotTypeVersion" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotTypeVersion"></a>

```typescript
public readonly slotTypeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type_version LexIntent#slot_type_version}.

---

##### `valueElicitationPrompt`<sup>Optional</sup> <a name="valueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.valueElicitationPrompt"></a>

```typescript
public readonly valueElicitationPrompt: LexIntentSlotValueElicitationPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

value_elicitation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#value_elicitation_prompt LexIntent#value_elicitation_prompt}

---

### LexIntentSlotValueElicitationPrompt <a name="LexIntentSlotValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentSlotValueElicitationPrompt: lexIntent.LexIntentSlotValueElicitationPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentSlotValueElicitationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentSlotValueElicitationPromptMessage <a name="LexIntentSlotValueElicitationPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentSlotValueElicitationPromptMessage: lexIntent.LexIntentSlotValueElicitationPromptMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentTimeouts <a name="LexIntentTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

const lexIntentTimeouts: lexIntent.LexIntentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexIntentConclusionStatementMessageList <a name="LexIntentConclusionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentConclusionStatementMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get"></a>

```typescript
public get(index: number): LexIntentConclusionStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentConclusionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]

---


### LexIntentConclusionStatementMessageOutputReference <a name="LexIntentConclusionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentConclusionStatementMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentConclusionStatementMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a> | cdktf.IResolvable

---


### LexIntentConclusionStatementOutputReference <a name="LexIntentConclusionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentConclusionStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentConclusionStatementMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentConclusionStatementMessageList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentConclusionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentConclusionStatement;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---


### LexIntentConfirmationPromptMessageList <a name="LexIntentConfirmationPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentConfirmationPromptMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get"></a>

```typescript
public get(index: number): LexIntentConfirmationPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentConfirmationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]

---


### LexIntentConfirmationPromptMessageOutputReference <a name="LexIntentConfirmationPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentConfirmationPromptMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentConfirmationPromptMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a> | cdktf.IResolvable

---


### LexIntentConfirmationPromptOutputReference <a name="LexIntentConfirmationPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentConfirmationPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentConfirmationPromptMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentConfirmationPromptMessageList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentConfirmationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentConfirmationPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---


### LexIntentDialogCodeHookOutputReference <a name="LexIntentDialogCodeHookOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentDialogCodeHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput">messageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion">messageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageVersionInput`<sup>Optional</sup> <a name="messageVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput"></a>

```typescript
public readonly messageVersionInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion"></a>

```typescript
public readonly messageVersion: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentDialogCodeHook;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---


### LexIntentFollowUpPromptOutputReference <a name="LexIntentFollowUpPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentFollowUpPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt">putPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement">putRejectionStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrompt` <a name="putPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt"></a>

```typescript
public putPrompt(value: LexIntentFollowUpPromptPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---

##### `putRejectionStatement` <a name="putRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement"></a>

```typescript
public putRejectionStatement(value: LexIntentFollowUpPromptRejectionStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput">promptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput">rejectionStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt"></a>

```typescript
public readonly prompt: LexIntentFollowUpPromptPromptOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a>

---

##### `rejectionStatement`<sup>Required</sup> <a name="rejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement"></a>

```typescript
public readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: LexIntentFollowUpPromptPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---

##### `rejectionStatementInput`<sup>Optional</sup> <a name="rejectionStatementInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput"></a>

```typescript
public readonly rejectionStatementInput: LexIntentFollowUpPromptRejectionStatement;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---


### LexIntentFollowUpPromptPromptMessageList <a name="LexIntentFollowUpPromptPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentFollowUpPromptPromptMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get"></a>

```typescript
public get(index: number): LexIntentFollowUpPromptPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentFollowUpPromptPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]

---


### LexIntentFollowUpPromptPromptMessageOutputReference <a name="LexIntentFollowUpPromptPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPromptPromptMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a> | cdktf.IResolvable

---


### LexIntentFollowUpPromptPromptOutputReference <a name="LexIntentFollowUpPromptPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentFollowUpPromptPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentFollowUpPromptPromptMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentFollowUpPromptPromptMessageList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentFollowUpPromptPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPromptPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---


### LexIntentFollowUpPromptRejectionStatementMessageList <a name="LexIntentFollowUpPromptRejectionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get"></a>

```typescript
public get(index: number): LexIntentFollowUpPromptRejectionStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentFollowUpPromptRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]

---


### LexIntentFollowUpPromptRejectionStatementMessageOutputReference <a name="LexIntentFollowUpPromptRejectionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPromptRejectionStatementMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a> | cdktf.IResolvable

---


### LexIntentFollowUpPromptRejectionStatementOutputReference <a name="LexIntentFollowUpPromptRejectionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentFollowUpPromptRejectionStatementMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentFollowUpPromptRejectionStatementMessageList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentFollowUpPromptRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPromptRejectionStatement;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---


### LexIntentFulfillmentActivityCodeHookOutputReference <a name="LexIntentFulfillmentActivityCodeHookOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput">messageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion">messageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageVersionInput`<sup>Optional</sup> <a name="messageVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput"></a>

```typescript
public readonly messageVersionInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion"></a>

```typescript
public readonly messageVersion: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFulfillmentActivityCodeHook;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---


### LexIntentFulfillmentActivityOutputReference <a name="LexIntentFulfillmentActivityOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentFulfillmentActivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook">putCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook">resetCodeHook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeHook` <a name="putCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook"></a>

```typescript
public putCodeHook(value: LexIntentFulfillmentActivityCodeHook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---

##### `resetCodeHook` <a name="resetCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook"></a>

```typescript
public resetCodeHook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook">codeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput">codeHookInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeHook`<sup>Required</sup> <a name="codeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook"></a>

```typescript
public readonly codeHook: LexIntentFulfillmentActivityCodeHookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a>

---

##### `codeHookInput`<sup>Optional</sup> <a name="codeHookInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput"></a>

```typescript
public readonly codeHookInput: LexIntentFulfillmentActivityCodeHook;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFulfillmentActivity;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---


### LexIntentRejectionStatementMessageList <a name="LexIntentRejectionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentRejectionStatementMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get"></a>

```typescript
public get(index: number): LexIntentRejectionStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]

---


### LexIntentRejectionStatementMessageOutputReference <a name="LexIntentRejectionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentRejectionStatementMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentRejectionStatementMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a> | cdktf.IResolvable

---


### LexIntentRejectionStatementOutputReference <a name="LexIntentRejectionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentRejectionStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentRejectionStatementMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentRejectionStatementMessageList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentRejectionStatement;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---


### LexIntentSlotList <a name="LexIntentSlotList" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentSlotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.get"></a>

```typescript
public get(index: number): LexIntentSlotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentSlot[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a>[]

---


### LexIntentSlotOutputReference <a name="LexIntentSlotOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentSlotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt">putValueElicitationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances">resetSampleUtterances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion">resetSlotTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt">resetValueElicitationPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueElicitationPrompt` <a name="putValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt"></a>

```typescript
public putValueElicitationPrompt(value: LexIntentSlotValueElicitationPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```

##### `resetSampleUtterances` <a name="resetSampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances"></a>

```typescript
public resetSampleUtterances(): void
```

##### `resetSlotTypeVersion` <a name="resetSlotTypeVersion" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion"></a>

```typescript
public resetSlotTypeVersion(): void
```

##### `resetValueElicitationPrompt` <a name="resetValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt"></a>

```typescript
public resetValueElicitationPrompt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt">valueElicitationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput">sampleUtterancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput">slotConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput">slotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput">slotTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput">valueElicitationPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances">sampleUtterances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraint">slotConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotType">slotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion">slotTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueElicitationPrompt`<sup>Required</sup> <a name="valueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt"></a>

```typescript
public readonly valueElicitationPrompt: LexIntentSlotValueElicitationPromptOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `sampleUtterancesInput`<sup>Optional</sup> <a name="sampleUtterancesInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput"></a>

```typescript
public readonly sampleUtterancesInput: string[];
```

- *Type:* string[]

---

##### `slotConstraintInput`<sup>Optional</sup> <a name="slotConstraintInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput"></a>

```typescript
public readonly slotConstraintInput: string;
```

- *Type:* string

---

##### `slotTypeInput`<sup>Optional</sup> <a name="slotTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput"></a>

```typescript
public readonly slotTypeInput: string;
```

- *Type:* string

---

##### `slotTypeVersionInput`<sup>Optional</sup> <a name="slotTypeVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput"></a>

```typescript
public readonly slotTypeVersionInput: string;
```

- *Type:* string

---

##### `valueElicitationPromptInput`<sup>Optional</sup> <a name="valueElicitationPromptInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput"></a>

```typescript
public readonly valueElicitationPromptInput: LexIntentSlotValueElicitationPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `sampleUtterances`<sup>Required</sup> <a name="sampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances"></a>

```typescript
public readonly sampleUtterances: string[];
```

- *Type:* string[]

---

##### `slotConstraint`<sup>Required</sup> <a name="slotConstraint" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraint"></a>

```typescript
public readonly slotConstraint: string;
```

- *Type:* string

---

##### `slotType`<sup>Required</sup> <a name="slotType" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotType"></a>

```typescript
public readonly slotType: string;
```

- *Type:* string

---

##### `slotTypeVersion`<sup>Required</sup> <a name="slotTypeVersion" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion"></a>

```typescript
public readonly slotTypeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentSlot | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot">LexIntentSlot</a> | cdktf.IResolvable

---


### LexIntentSlotValueElicitationPromptMessageList <a name="LexIntentSlotValueElicitationPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentSlotValueElicitationPromptMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get"></a>

```typescript
public get(index: number): LexIntentSlotValueElicitationPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentSlotValueElicitationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]

---


### LexIntentSlotValueElicitationPromptMessageOutputReference <a name="LexIntentSlotValueElicitationPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentSlotValueElicitationPromptMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a> | cdktf.IResolvable

---


### LexIntentSlotValueElicitationPromptOutputReference <a name="LexIntentSlotValueElicitationPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentSlotValueElicitationPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentSlotValueElicitationPromptMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentSlotValueElicitationPromptMessageList;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentSlotValueElicitationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentSlotValueElicitationPrompt;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---


### LexIntentTimeoutsOutputReference <a name="LexIntentTimeoutsOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/provider-aws'

new lexIntent.LexIntentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> | cdktf.IResolvable

---



